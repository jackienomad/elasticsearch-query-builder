const generateQuery = (
  mappedArray,
  startDate,
  endDate,
  keyword,
  countSuggestedKeywords
) => {
  const query = {
    query: {
      bool: {
        must: {
          bool: {
            must: {
              match_phrase: {
                [mappedArray.field]: keyword
              }
            },
            must_not: {
              match: {
                [[mappedArray.field] + '.untouched']: keyword
              }
            },
            filter: {
              range: {
                ArrivalDate: {
                  gte: startDate,
                  lte: endDate
                }
              }
            }
          }
        }
      }
    },
    aggs: {
      [mappedArray.field]: {
        terms: {
          field: `${mappedArray.field}.untouched`,
          size: countSuggestedKeywords
        }
      }
    }
  }

  return query
}

// validate the start date and end date
const validateDate = (startDate, endDate) => {
  if (!Number.isInteger(startDate) && !Number.isInteger(endDate)) {
    throw Error('Start Date and end Date should be int.')
  }

  if (startDate > endDate) {
    throw Error('Start date is greater than to the end date')
  }
}

export default class SuggestedKeywords {
  constructor(keywordSuggestedMapped, fields) {
    this.keywordSuggestedMapped = keywordSuggestedMapped

    if (!Array.isArray(fields)) throw Error('Fields should be an array')

    fields.forEach(field => {
      if (!keywordSuggestedMapped[field])
        throw Error('Fields not Match on the mapper')
    })

    this.fields = fields
  }
  // return a object that will consume by the elastic search
  buildQuery(keyword, startDate, endDate, suggestedKeywordsCount) {
    const fields = this.fields
    validateDate(startDate, endDate)
    let query = {
      body: []
    }

    const mappedFields = Object.keys(this.keywordSuggestedMapped)
    this.fields
      .filter(field => mappedFields.indexOf(field) >= 0)
      .forEach(fieldName => {
        const mappedField = this.keywordSuggestedMapped[fieldName]
        query.body.push({
          index: mappedField.index,
          type: mappedField.field.toLowerCase()
        })
        query.body.push(
          generateQuery(
            mappedField,
            startDate,
            endDate,
            keyword,
            suggestedKeywordsCount
          )
        )
      })

    return query
  }

  formatResponse(resultFromElasticSearch) {
    let result = {}

    this.fields.forEach((field, index) => {
      const { [index]: response } = resultFromElasticSearch.responses
      const { buckets } = response.aggregations.Suggestion
      const everyField = {
        [field]: []
      }

      buckets.forEach(fromBucket => {
        everyField[field].push({
          keyword: fromBucket.key,
          type: this.keywordSuggestedMapped[field].type,
          search_field: this.keywordSuggestedMapped[field].search_field
        })
      })

      Object.assign(result, everyField)
    })

    return result
  }
}
