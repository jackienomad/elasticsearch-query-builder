export class SuggestedFields {
  constructor(mappedFields) {
    this.mappedFields = mappedFields

    if (!this.mappedFields) {
      throw new Error(
        'SuggestedFields class requires a field mapping to be provided'
      )
    }
  }

  buildQuery(keyword, startDate, endDate) {
    // check if keyword is blank
    if (!keyword) throw new Error('Keyword must not be blank')

    const indexes = Object.keys(this.mappedFields).map(key => {
      const { index, field } = this.mappedFields[key]
      return {
        index: `${index}`,
        type: `${field.toLowerCase()}`
      }
    })

    const query = {
      query: {
        bool: {
          must: {
            match_phrase: {
              Suggestion: `${keyword}`
            }
          },
          must_not: {
            match: {
              'Suggestion.untouched': `${keyword}`
            }
          },
          filter: {
            range: {
              ArrivalDate: {
                gte: +startDate,
                lte: +endDate
              }
            }
          }
        }
      },
      size: 0
    }

    for (let i = 0, len = indexes.length; i < len; i++) {
      indexes.splice(i * 2 + 1, 0, query)
    }

    return {
      body: indexes
    }
  }

  formatResponse(esResponse) {
    const { responses } = esResponse

    let fields = Object.keys(this.mappedFields)
    fields = fields.filter((item, index) => {
      const {
        hits: { total }
      } = responses[index]
      return +total > 0
    })

    return fields
  }
}

export default SuggestedFields
