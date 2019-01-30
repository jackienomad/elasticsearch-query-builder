import {
  getMinimumByType,
  Operators,
  SearchTypes,
  MiscTypes
} from './searchUtils'
import { FieldMappingAdapter } from './FieldMappingAdapter'

export class SearchBuilder {
  /*------------------------------CONSTRUCTOR------------------------------*/
  constructor(index, type, fieldMapping) {
    this.index = index
    this.type = type
    this.fieldMapping = fieldMapping
    this.fieldMappingAdapter = new FieldMappingAdapter(fieldMapping)
    this.searchQuery = null
    this.mustFilterQuery = null
    this.notQuery = null
    this.sorting = null
  }

  destroy() {
    this.fieldMappingAdapter.destroy()

    this.index = null
    this.type = null
    this.fieldMapping = null
    this.fieldMappingAdapter = null
    this.searchQuery = null
    this.mustFilterQuery = null
    this.notQuery = null
    this.sorting = null
  }

  /*------------------------------METHODS------------------------------*/
  buildKeywords(keywords) {
    if (!this.notQuery) this.notQuery = []
    if (!this.searchQuery) this.searchQuery = []

    let queryGroup
    // build keywords
    keywords.forEach(({ field, operator, keyword, type }) => {
      const mappedField = this.fieldMappingAdapter.getMappedField(field)
      if (operator === Operators.NOT) {
        this.notQuery.push({
          match_phrase: { [mappedField]: keyword }
        })
      } else {
        let queryObject
        if (type === SearchTypes.EXACT) {
          queryObject = {
            match_phrase: { [mappedField]: keyword }
          }
        } else {
          queryObject = {
            match: {
              [mappedField]: {
                query: keyword,
                minimum_should_match: getMinimumByType(type)
              }
            }
          }
        }

        // init querygroup
        if (operator === Operators.AND || !queryGroup) {
          queryGroup = {
            bool: {
              should: []
            }
          }
          this.searchQuery.push(queryGroup)
        }

        queryGroup.bool.should.push(queryObject)
      }
    })
  }

  buildInclude(include) {
    const includeReturn = {}
    include.forEach(({ field, keyword }) => {
      const includedField = this.fieldMappingAdapter.getMappedField(field, true)
      if (!includeReturn[includedField]) includeReturn[includedField] = []
      includeReturn[includedField].push({
        match_phrase: { [includedField]: keyword }
      })
    })

    return Object.keys(includeReturn).map(field => ({
      bool: {
        should: includeReturn[field]
      }
    }))
  }

  buildExclude(exclude) {
    return exclude.map(({ field, keyword }) => ({
      match_phrase: {
        [this.fieldMappingAdapter.getMappedField(field)]: keyword
      }
    }))
  }

  buildMisc(misc) {
    if (!this.notQuery) this.notQuery = []
    if (!this.mustFilterQuery) this.mustFilterQuery = []
    if (!this.searchQuery) this.searchQuery = []

    misc &&
      misc.forEach(elem => {
        const miscField = this.fieldMappingAdapter.getMiscField(elem)

        if (
          elem === MiscTypes.BLANK_CONSIGNEES_EXCLUDED ||
          elem === MiscTypes.BLANK_SHIPPERS_EXCLUDED
        ) {
          this.searchQuery.push({
            exists: {
              field: miscField
            }
          })
        } else if (elem === MiscTypes.MASTER_SHIPMENTS_EXCLUDED) {
          this.notQuery.push({
            match_phrase: { [miscField]: 'Master' }
          })
        } else if (elem === MiscTypes.HOUSE_SHIPMENTS_ONLY) {
          this.mustFilterQuery.push({
            bool: {
              should: [
                {
                  match_phrase: { [miscField]: 'H' }
                },
                {
                  match_phrase: { [miscField]: 'House' }
                }
              ]
            }
          })
        } else if (elem === MiscTypes.MASTER_SHIPMENTS_ONLY) {
          this.mustFilterQuery.push({
            match_phrase: { [miscField]: 'Master' }
          })
        }
      })

    return {
      notQuery: this.notQuery,
      mustFilterQuery: this.mustFilterQuery,
      searchQuery: this.searchQuery
    }
  }

  buildSorting(sortBy) {
    let sortField = 'Arrival Date'
    let sortOrder = 'asc'
    this.sorting = []

    if (sortBy && sortBy.length > 0) {
      if (sortBy.charAt(0) === '-') {
        sortOrder = 'desc'
        sortField = this.fieldMappingAdapter.getMappedField(
          sortBy.substr(1),
          true
        )
      } else if (sortBy.charAt(0) === '+') {
        sortOrder = 'asc'
        sortField = this.fieldMappingAdapter.getMappedField(
          sortBy.substr(1),
          true
        )
      } else {
        sortOrder = 'asc'
        sortField = this.fieldMappingAdapter.getMappedField(sortBy, true)
      }
    }

    this.sorting.push(
      {
        [sortField]: {
          order: sortOrder
        }
      },
      '_score'
    )

    return this
  }

  buildQuery(
    keywords,
    include,
    exclude,
    misc,
    sortBy,
    limit,
    page,
    arrivalDates = ''
  ) {
    let [gte = '', lte = ''] = (arrivalDates && arrivalDates.split('-')) || []
    this.searchQuery = []
    this.mustFilterQuery = []
    this.notQuery = []

    this.buildKeywords(keywords)

    if (include) this.mustFilterQuery.push(...this.buildInclude(include))
    if (exclude) this.notQuery.push(...this.buildExclude(exclude))

    this.buildMisc(misc)
    this.buildSorting(sortBy)

    const querySearch = {
      size: limit,
      from: page * limit - limit,
      track_scores: true,
      sort: this.sorting,
      query: {
        bool: {
          must: this.searchQuery,
          must_not: this.notQuery,
          filter: [
            ...this.mustFilterQuery,
            {
              range: {
                'Arrival Date': {
                  gte: gte,
                  lte: lte
                }
              }
            }
          ]
        }
      }
    }

    return {
      index: this.index,
      type: this.type,
      body: querySearch
    }
  }
}

export default SearchBuilder
