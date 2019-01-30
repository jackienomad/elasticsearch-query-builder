import SuggestedKeywords from 'qb/@/search/SuggestedKeywords'
import { expectedResponseOfSuggestedKeyword } from './dataset/suggestedKeywordElasticSearchResponse'

describe('Suggested Keyword Class', () => {
  const mappedFieldJson = {
    Consignee: {
      field: 'Suggestion',
      index: 'us_import_consignee',
      type: 'query',
      search_field: 'Consignee'
    },
    Shipper: {
      field: 'Suggestion',
      index: 'us_import_shipper',
      type: 'query',
      search_field: 'Shipper'
    },
    MarksAndNumbers: {
      field: 'Suggestion',
      index: 'us_import_marks_and_numbers',
      type: 'query',
      search_field: 'MarksAndNumbers'
    },
    ProductKeywords: {
      field: 'Suggestion',
      index: 'us_import_product_keywords',
      type: 'query',
      search_field: 'ProductDescription'
    }
  }
  const generateQuery = (
    mappedArray,
    startDate,
    endDate,
    keyword,
    countSuggestedKeywords
  ) => {
    const query = {}

    Object.assign(query, {
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
    })

    return query
  }

  it('should validate the mapped fields in constructor', function() {
    expect(() => {
      new SuggestedKeywords(mappedFieldJson)
    }).toThrowError()

    function noMatchFieldInMappedField() {
      new SuggestedKeywords(mappedFieldJson, ['consigneesss'])
    }
    expect(noMatchFieldInMappedField).toThrowError()
  })

  it('should throw an error that validate the start date is greater than to the end date', function() {
    const fields = ['Shipper']
    const keyword = 'sample'
    const suggestedKeywordCount = 1
    const suggestedKeywords = new SuggestedKeywords(mappedFieldJson, fields)
    const bigStartDate = 9999999999
    const smallEndDate = 1111111111

    expect(() => {
      suggestedKeywords.buildQuery(
        keyword,
        bigStartDate,
        smallEndDate,
        suggestedKeywordCount
      )
    }).toThrowError()
  })

  it('should throw an error that validate the start date and end date into int', function() {
    const fields = ['Shipper']
    const keyword = 'sample'
    const suggestedKeywordCount = 1
    const suggestedKeywords = new SuggestedKeywords(mappedFieldJson, fields)

    expect(() => {
      suggestedKeywords.buildQuery(
        keyword,
        'invalid start date',
        'invalid end date',
        suggestedKeywordCount
      )
    }).toThrowError()
  })

  it('should build a query for elastic search', function() {
    const generateExpectedQuery = (
      mappedArray,
      fields,
      startDate,
      endDate,
      keyword,
      countSuggestedKeywords
    ) => {
      let query = {
        body: []
      }

      Object.keys(mappedArray)
        .filter(mappedField => fields.indexOf(mappedField) >= 0)
        .forEach(fieldName => {
          const mappedField = mappedArray[fieldName]
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
              countSuggestedKeywords
            )
          )
        })

      return query
    }
    const fields = ['Shipper', 'MarksAndNumbers']
    const suggestedKeywords = new SuggestedKeywords(mappedFieldJson, fields)
    const startDate = 1123
    const endDate = 1233

    const keyword = 'any'
    const suggestedKeywordCount = 5
    const query = suggestedKeywords.buildQuery(
      keyword,
      startDate,
      endDate,
      suggestedKeywordCount
    )

    expect(query).toEqual(
      generateExpectedQuery(
        mappedFieldJson,
        fields,
        startDate,
        endDate,
        keyword,
        suggestedKeywordCount
      )
    )
  })

  const formatResponse = (fields, responseOfElasticSearch) => {
    let result = {}

    fields.forEach((field, index) => {
      const response = responseOfElasticSearch.responses[index]
      const buckets = response.aggregations.Suggestion.buckets
      const everyField = {
        [field]: []
      }

      buckets.forEach(fromBucket => {
        everyField[field].push({
          keyword: fromBucket.key,
          type: 'query',
          search_field: field
        })
      })

      Object.assign(result, everyField)
    })

    return result
  }

  it('should get the result from the response of the elastic search', function() {
    const startDate = 1123
    const endDate = 1233
    const fields = ['Shipper', 'MarksAndNumbers']
    const keyword = 'any'
    const suggestedKeywordCount = 5
    const suggestedKeywords = new SuggestedKeywords(mappedFieldJson, fields)
    suggestedKeywords.buildQuery(
      keyword,
      startDate,
      endDate,
      suggestedKeywordCount
    )

    const expectedResult = expectedResponseOfSuggestedKeyword(fields)
    expect(suggestedKeywords.formatResponse(expectedResult)).toEqual(
      formatResponse(fields, expectedResult)
    )
  })
})
