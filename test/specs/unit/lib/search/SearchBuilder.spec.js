import { SearchBuilder } from 'qb/@/search/SearchBuilder'
import { MiscTypes } from 'qb/@/search/searchUtils'
import fieldMapping from './dataset/sampleFieldMapping'

describe('SearchBuilder class', () => {
  describe('constructor and destructor', () => {
    it('should be instantiable', () => {
      expect(() => {
        new SearchBuilder('sample index', 'sample type', fieldMapping)
      }).not.toThrowError()
    })

    it('should be destroyable', () => {
      const builder = new SearchBuilder(
        'sample index',
        'sample type',
        fieldMapping
      )
      expect(() => {
        builder.destroy()
      }).not.toThrowError()
    })
  })

  describe('buildKeywords', () => {
    const builder = new SearchBuilder(
      'sample index',
      'sample type',
      fieldMapping
    )

    afterAll(() => {
      builder.destroy()
      builder = null
    })

    it('should return mapped include object', () => {
      const actual = builder.buildKeywords([
        {
          field: 'Consignee',
          keyword: 'Chicago',
          operator: 'and',
          type: 'fuzzy'
        },
        {
          field: 'Consignee',
          keyword: 'Arizona',
          operator: 'or',
          type: 'regular'
        },
        {
          field: 'Shipper',
          keyword: 'Chicago',
          operator: 'and',
          type: 'exact'
        },
        ,
        {
          field: 'ProductDescription',
          keyword: 'apple',
          operator: 'not',
          type: 'regular'
        },
        {
          field: 'ProductDescription',
          keyword: 'apple juice',
          operator: 'or',
          type: 'exact'
        }
      ])

      expect(builder.searchQuery).toMatchSnapshot()
      expect(builder.notQuery).toMatchSnapshot()
    })
  })

  describe('buildInclude', () => {
    const builder = new SearchBuilder(
      'sample index',
      'sample type',
      fieldMapping
    )

    afterAll(() => {
      builder.destroy()
      builder = null
    })

    it('should return mapped include object', () => {
      const actual = builder.buildInclude([
        {
          field: 'ConsigneeCity',
          keyword: 'Chicago'
        },
        {
          field: 'ConsigneeState',
          keyword: 'Arizona'
        },
        {
          field: 'ConsigneeState',
          keyword: 'Texas'
        },
        {
          field: 'ConsigneeZipCode',
          keyword: '90210'
        },
        {
          field: 'ConsigneeZipCode',
          keyword: '88410'
        },
        {
          field: 'ShipperAddress',
          keyword: 'Genius Drive'
        },
        {
          field: 'CountryOfOrigin',
          keyword: 'ph'
        },
        {
          field: 'DestinationPort',
          keyword: 'Port of Los Angeles'
        },
        {
          field: 'ForeignPort',
          keyword: 'Port of Busan'
        }
      ])

      expect(actual).toMatchSnapshot()
    })
  })

  describe('buildExclude', () => {
    const builder = new SearchBuilder(
      'sample index',
      'sample type',
      fieldMapping
    )

    afterAll(() => {
      builder.destroy()
      builder = null
    })

    it('should return mapped exclude object', () => {
      const actual = builder.buildExclude([
        {
          field: 'ConsigneeCity',
          keyword: 'Chicago'
        },
        {
          field: 'ConsigneeState',
          keyword: 'Arizona'
        },
        {
          field: 'ConsigneeZipCode',
          keyword: '90210'
        },
        {
          field: 'ShipperAddress',
          keyword: 'Genius Drive'
        },
        {
          field: 'CountryOfOrigin',
          keyword: 'ph'
        },
        {
          field: 'DestinationPort',
          keyword: 'Port of Los Angeles'
        },
        {
          field: 'ForeignPort',
          keyword: 'Port of Busan'
        }
      ])

      expect(actual).toMatchSnapshot()
    })
  })

  describe('buildMisc', () => {
    const builder = new SearchBuilder(
      'sample index',
      'sample type',
      fieldMapping
    )

    afterAll(() => {
      builder.destroy()
      builder = null
    })

    it('should return mapped misc objects', () => {
      const actual = builder.buildMisc([
        MiscTypes.BLANK_CONSIGNEES_EXCLUDED,
        MiscTypes.MASTER_SHIPMENTS_EXCLUDED,
        MiscTypes.HOUSE_SHIPMENTS_ONLY,
        MiscTypes.MASTER_SHIPMENTS_ONLY
      ])

      expect(builder.mustFilterQuery).toMatchSnapshot()
      expect(builder.notQuery).toMatchSnapshot()
    })
  })

  describe('buildSorting', () => {
    const builder = new SearchBuilder(
      'sample index',
      'sample type',
      fieldMapping
    )

    afterAll(() => {
      builder.destroy()
      builder = null
    })

    it('should return default sort object if empty', () => {
      const actual = builder.buildSorting().sorting

      expect(actual).toMatchSnapshot()
    })

    it('should handle descending sort', () => {
      const actual = builder.buildSorting('-Consignee').sorting

      expect(actual).toMatchSnapshot()
    })

    it('should handle ascending sort', () => {
      const actual = builder.buildSorting('+Shipper').sorting

      expect(actual).toMatchSnapshot()
    })

    it('should handle no specified order', () => {
      const actual = builder.buildSorting('MarksAndNumbers').sorting

      expect(actual).toMatchSnapshot()
    })
  })

  describe('buildQuery', () => {
    const builder = new SearchBuilder(
      'sample index',
      'sample type',
      fieldMapping
    )

    afterAll(() => {
      builder.destroy()
      builder = null
    })

    it('should build an es query', () => {
      const actual = builder.buildQuery(
        [
          {
            field: 'Consignee',
            keyword: 'Chicago',
            operator: 'and',
            type: 'fuzzy'
          },
          {
            field: 'Shipper',
            keyword: 'Chicago',
            operator: 'and',
            type: 'exact'
          },
          {
            field: 'Shipper',
            keyword: 'Chicago',
            operator: 'or',
            type: 'regular'
          },
          {
            field: 'ProductDescription',
            keyword: 'orange',
            operator: 'and',
            type: 'exact'
          },
          {
            field: 'ProductDescription',
            keyword: 'apple',
            operator: 'not',
            type: 'exact'
          }
        ],
        [
          {
            field: 'ConsigneeCity',
            keyword: 'Chicago'
          },
          {
            field: 'ConsigneeCity',
            keyword: 'Los Angeles'
          },
          {
            field: 'ConsigneeState',
            keyword: 'Arizona'
          }
        ],
        [
          {
            field: 'CountryOfOrigin',
            keyword: 'ph'
          },
          {
            field: 'DestinationPort',
            keyword: 'Port of Los Angeles'
          }
        ],
        [
          MiscTypes.BLANK_CONSIGNEES_EXCLUDED,
          MiscTypes.MASTER_SHIPMENTS_EXCLUDED,
          MiscTypes.HOUSE_SHIPMENTS_ONLY,
          MiscTypes.MASTER_SHIPMENTS_ONLY
        ],
        '-Shipper',
        20,
        1,
        '1512938867-1544475436'
      )

      expect(actual).toMatchSnapshot()
    })
  })
})
