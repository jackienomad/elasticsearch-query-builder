import SuggestedFields from 'qb/@/search/SuggestedFields'
import path from 'path'
import {
  esResponse,
  esResponseWithZeroShipper
} from './dataset/suggestedFieldElasticSearchResponse'

describe('SuggestedFields class', () => {
  const mappedFields = {
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

  describe('constructor', () => {
    it('can be instantiated with a field mapping', () => {
      expect(() => {
        const suggestedFields = new SuggestedFields(mappedFields)
      }).not.toThrowError()
    })

    it('should throw an error if a field mapping is not provided', () => {
      expect(() => {
        const suggestedFields = new SuggestedFields()
      }).toThrowErrorMatchingInlineSnapshot(
        `"SuggestedFields class requires a field mapping to be provided"`
      )
    })
  })

  describe('buildQuery', () => {
    it('should return an msearch query', () => {
      const keyword = 'apple'
      const startDate = 1542250403
      const endDate = 1542250403

      const suggestedFields = new SuggestedFields(mappedFields)
      const query = suggestedFields.buildQuery(keyword, startDate, endDate)
      expect(query).toMatchSnapshot()
    })

    it('should throw error on empty keyword', () => {
      const keyword = ''
      const startDate = 1542250403
      const endDate = 1542250403

      const suggestedFields = new SuggestedFields(mappedFields)
      expect(() => {
        suggestedFields.buildQuery(keyword, startDate, endDate)
      }).toThrowErrorMatchingInlineSnapshot(`"Keyword must not be blank"`)
    })
  })

  describe('formatResponse', () => {
    it('should be able to return formatted elasticsearch response', async () => {
      const suggestedFields = new SuggestedFields(mappedFields)
      const input = esResponse
      const output = suggestedFields.formatResponse(input)
      const expectedOutput = [
        'Consignee',
        'Shipper',
        'MarksAndNumbers',
        'ProductKeywords'
      ]
      expect(output).toEqual(expectedOutput)
    })

    it('should be able remove field on zero hits', async () => {
      const suggestedFields = new SuggestedFields(mappedFields)
      const input = esResponseWithZeroShipper
      const output = suggestedFields.formatResponse(input)
      const expectedOutput = ['Consignee', 'MarksAndNumbers', 'ProductKeywords']
      expect(output).toEqual(expectedOutput)
    })
  })
})
