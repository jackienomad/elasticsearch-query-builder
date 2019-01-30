const buildDisplayCount = (analyticsAggregateFields, fieldMapper) => {
  const aggregateDisplay = {}

  Object.keys(analyticsAggregateFields).forEach(fieldName => {
    if (fieldName !== 'shipments_count') {
      const { mappedField } = analyticsAggregateFields[fieldName]

      const { field } = fieldMapper[mappedField]
      aggregateDisplay[fieldName] = {
        sum: {
          field
        }
      }
    }
  })

  return aggregateDisplay
}

const getAnalyzedField = (field, fieldMapper, analyzeField) => {
  const getField = analyzeField[field].mappedField
  return fieldMapper[getField].not_analyzed_field
}

const buildSorting = (sortBy, analyticsAggregateFields) => {
  let sortOrder = 'desc'
  let sortName = ''
  if (sortBy && sortBy.length > 0) {
    switch (sortBy.charAt(0)) {
      case '-':
        sortOrder = 'desc'
        sortName = sortBy.substr(1).toLowerCase()
        break
      case '+':
        sortOrder = 'asc'
        sortName = sortBy.substr(1).toLowerCase()

        break
      default:
        sortOrder = 'desc'
        sortName = sortBy.toLowerCase()
    }

    if (sortName === 'shipments_count') {
      sortName = analyticsAggregateFields[sortName].mappedField
    }

    return [{ [sortName]: `${sortOrder}` }]
  }

  return null
}

export class AnalyticsBuilder {
  constructor(searchBuilder, searchAnalyticsFieldMapping) {
    if (!searchBuilder) throw new Error('searchBuilder is required')
    if (typeof searchAnalyticsFieldMapping !== 'object') {
      throw new Error('searchAnalyticsFieldMapping is required')
    }

    this.searchBuilder = searchBuilder
    this.searchAggregatedFieldMapping = searchAnalyticsFieldMapping

    const {
      analyticsAggregateFields,
      analyticsAnalyzeFields,
      analyticsDefaultDisplaySortBy
    } = searchAnalyticsFieldMapping

    this.analyticsAggregateFields = analyticsAggregateFields
    this.analyzeFields = analyticsAnalyzeFields
    this.defaultSortBy = analyticsDefaultDisplaySortBy
  }

  destroy() {
    this.searchBuilder = null
    this.searchAggregatedFieldMapping = null
    this.analyticsAggregateFields = null
    this.analyzeFields = null
    this.defaultSortBy = null
  }

  buildQuery(
    analyzedField,
    keywords,
    include,
    exclude,
    misc,
    sortBy,
    size,
    arrivalDate = ''
  ) {
    const query = this.searchBuilder.buildQuery(
      keywords,
      include,
      exclude,
      misc,
      [],
      0,
      0,
      arrivalDate
    )

    const aggregateDisplay = buildDisplayCount(
      this.analyticsAggregateFields,
      this.searchAggregatedFieldMapping
    )

    if (sortBy === '') {
      sortBy = this.defaultSortBy
    }

    const sorting = buildSorting(sortBy, this.analyticsAggregateFields)

    const aggregation = {
      shipmentAggregate: {
        terms: {
          field: getAnalyzedField(
            analyzedField,
            this.searchAggregatedFieldMapping,
            this.analyzeFields
          ),
          size: size
        },
        aggs: { ...aggregateDisplay }
      }
    }

    if (sorting != null) {
      aggregation.shipmentAggregate.terms['order'] = sorting
    }

    query.body.size = 0
    query.body.from = 0
    delete query.body.sort

    query.body['aggs'] = aggregation
    return query
  }
}

export default AnalyticsBuilder
