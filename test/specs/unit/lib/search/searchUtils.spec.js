import {
  getMinimumByType,
  SearchTypes,
  transformArray
} from 'qb/@/search/searchUtils'

describe('searchUtils', () => {
  describe('getMinimumByType', () => {
    it('Fuzzy should return configured value', () => {
      const actual = getMinimumByType(SearchTypes.FUZZY)
      expect(actual).toMatchInlineSnapshot(`"75%"`)
    })

    it('Regular should return configured value', () => {
      const actual = getMinimumByType(SearchTypes.REGULAR)
      expect(actual).toMatchInlineSnapshot(`"100%"`)
    })
  })

  describe('transformArray', () => {
    it('should transform array to object', () => {
      const output = transformArray(['1,2,3', '4,5,6'], ['a', 'b', 'c'])
      expect(output).toEqual([
        { a: '1', b: '2', c: '3' },
        { a: '4', b: '5', c: '6' }
      ])
    })

    it('should handle blank parameter', () => {
      const output = transformArray()
      expect(output).toEqual([])
    })

    it('should handle uneven parameters', () => {
      const output = transformArray(
        ['1,2,3,4,5,6', '7,8,9,10'],
        ['a', 'b', 'c']
      )
      expect(output).toEqual([
        { a: '1,2,3,4', b: '5', c: '6' },
        { a: '7,8', b: '9', c: '10' }
      ])
    })
  })
})
