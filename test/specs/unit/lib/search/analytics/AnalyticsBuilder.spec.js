import fieldMapping from '../dataset/sampleFieldMapping'
import { AnalyticsBuilder } from 'qb/@/search/analytics/AnalyticsBuilder'
import {
  analyticsAggregateFields,
  analyticsAnalyzeFields,
  analyticsDefaultDisplaySortBy,
  analyticsDefaultValueShow
} from '../dataset/analyticsAggregateFields'
import { SearchBuilder } from 'qb/@/search/SearchBuilder'
import Faker from 'faker'
import { MiscTypes } from 'qb/@/search/searchUtils'

import * as expectedReturnQueryBuilder from './expectedReturnQueryBuilder'

describe('Search Analytics AnalyticsBuilder', () => {
  describe('constructor and destructor', () => {
    it('should be instantiable', () => {
      expect(() => {
        const searchBuilder = new SearchBuilder(
          Faker.random.word(),
          Faker.random.word(),
          fieldMapping
        )
        const merged = Object.assign(fieldMapping, analyticsAggregateFields)

        new AnalyticsBuilder(searchBuilder, merged)
      }).not.toThrowError()
    })

    it('should be destroyable', () => {
      const searchBuilder = new SearchBuilder(
        Faker.random.word(),
        Faker.random.word(),
        fieldMapping
      )

      const merged = Object.assign(fieldMapping, analyticsAggregateFields)
      const builder = new AnalyticsBuilder(searchBuilder, merged)
      expect(() => {
        builder.destroy()
      }).not.toThrowError()
    })
  })

  describe('build a query and aggregate term ', () => {
    it('should build a query for the analytics as a aggregate term consignees', () => {
      const searchBuilder = new SearchBuilder(
        'us_import',
        'shipments',
        fieldMapping
      )
      const merged = Object.assign(
        fieldMapping,
        analyticsAggregateFields,
        analyticsAnalyzeFields,
        analyticsDefaultDisplaySortBy,
        analyticsDefaultValueShow
      )

      const builder = new AnalyticsBuilder(searchBuilder, merged)

      const build = builder.buildQuery(
        'consignees',
        [
          {
            field: 'Consignee',
            keyword: 'apple',
            operator: 'and',
            type: 'fuzzy'
          }
        ],
        [],
        [],
        [MiscTypes.BLANK_CONSIGNEES_EXCLUDED],
        '',
        5,
        '1512938867-1544475436'
      )

      expect(build).toMatchSnapshot()
    })

    it('should build a query for the analytics as a aggregate term consignees', () => {
      const searchBuilder = new SearchBuilder(
        'us_import',
        'shipments',
        fieldMapping
      )
      const merged = Object.assign(
        fieldMapping,
        analyticsAggregateFields,
        analyticsAnalyzeFields
      )

      const builder = new AnalyticsBuilder(searchBuilder, merged)

      const build = builder.buildQuery(
        'consignees',
        [
          {
            field: 'Consignee',
            keyword: 'apple',
            operator: 'and',
            type: 'fuzzy'
          }
        ],
        [],
        [],
        [MiscTypes.BLANK_CONSIGNEES_EXCLUDED],
        '',
        5,
        '1512938867-1544475436'
      )

      expect(build).toMatchSnapshot()
    })

    it('should build a query for the analytics as a aggregate term states', () => {
      const searchBuilder = new SearchBuilder(
        'us_import',
        'shipments',
        fieldMapping
      )
      const merged = Object.assign(
        fieldMapping,
        analyticsAggregateFields,
        analyticsAnalyzeFields
      )

      const builder = new AnalyticsBuilder(searchBuilder, merged)

      const build = builder.buildQuery(
        'states',
        [
          {
            field: 'Consignee',
            keyword: 'apple',
            operator: 'and',
            type: 'fuzzy'
          }
        ],
        [],
        [],
        [MiscTypes.BLANK_CONSIGNEES_EXCLUDED],
        '',
        5,
        '1512938867-1544475436'
      )

      expect(build).toMatchSnapshot()
    })

    it('should build a query for the analytics as a aggregate term shippers', () => {
      const searchBuilder = new SearchBuilder(
        'us_import',
        'shipments',
        fieldMapping
      )
      const merged = Object.assign(
        fieldMapping,
        analyticsAggregateFields,
        analyticsAnalyzeFields
      )

      const builder = new AnalyticsBuilder(searchBuilder, merged)

      const build = builder.buildQuery(
        'shippers',
        [
          {
            field: 'Consignee',
            keyword: 'apple',
            operator: 'and',
            type: 'fuzzy'
          }
        ],
        [],
        [],
        [MiscTypes.BLANK_CONSIGNEES_EXCLUDED],
        '',
        5,
        '1512938867-1544475436'
      )

      expect(build).toMatchSnapshot()
    })

    it('should build a query for the analytics as a aggregate term us_ports', () => {
      const searchBuilder = new SearchBuilder(
        'us_import',
        'shipments',
        fieldMapping
      )
      const merged = Object.assign(
        fieldMapping,
        analyticsAggregateFields,
        analyticsAnalyzeFields
      )

      const builder = new AnalyticsBuilder(searchBuilder, merged)

      const build = builder.buildQuery(
        'us_ports',
        [
          {
            field: 'Consignee',
            keyword: 'apple',
            operator: 'and',
            type: 'fuzzy'
          }
        ],
        [],
        [],
        [MiscTypes.BLANK_CONSIGNEES_EXCLUDED],
        '',
        5,
        '1512938867-1544475436'
      )

      expect(build).toMatchSnapshot()
    })

    it('should build a query for the analytics as a aggregate term foreign_ports', () => {
      const searchBuilder = new SearchBuilder(
        'us_import',
        'shipments',
        fieldMapping
      )
      const merged = Object.assign(
        fieldMapping,
        analyticsAggregateFields,
        analyticsAnalyzeFields
      )

      const builder = new AnalyticsBuilder(searchBuilder, merged)

      const build = builder.buildQuery(
        'foreign_ports',
        [
          {
            field: 'Consignee',
            keyword: 'apple',
            operator: 'and',
            type: 'fuzzy'
          }
        ],
        [],
        [],
        [MiscTypes.BLANK_CONSIGNEES_EXCLUDED],
        '',
        5,
        '1512938867-1544475436'
      )

      expect(build).toMatchSnapshot()
    })

    it('should build a query for the analytics as a aggregate term origin_countries', () => {
      const searchBuilder = new SearchBuilder(
        'us_import',
        'shipments',
        fieldMapping
      )
      const merged = Object.assign(
        fieldMapping,
        analyticsAggregateFields,
        analyticsAnalyzeFields
      )

      const builder = new AnalyticsBuilder(searchBuilder, merged)

      const build = builder.buildQuery(
        'origin_countries',
        [
          {
            field: 'Consignee',
            keyword: 'apple',
            operator: 'and',
            type: 'fuzzy'
          }
        ],
        [],
        [],
        [MiscTypes.BLANK_CONSIGNEES_EXCLUDED],
        '',
        5,
        '1512938867-1544475436'
      )

      expect(build).toMatchSnapshot()
    })

    it('should sort by shipments_count desc (analyticsAggregateFields)', () => {
      const searchBuilder = new SearchBuilder(
        'us_import',
        'shipments',
        fieldMapping
      )
      const merged = Object.assign(
        fieldMapping,
        analyticsAggregateFields,
        analyticsAnalyzeFields
      )
      const builder = new AnalyticsBuilder(searchBuilder, merged)
      const build = builder.buildQuery(
        'consignees',
        [
          {
            field: 'Consignee',
            keyword: 'apple',
            operator: 'and',
            type: 'fuzzy'
          }
        ],
        [],
        [],
        [MiscTypes.BLANK_CONSIGNEES_EXCLUDED],
        `-shipments_count`,
        5,
        '1512938867-1544475436'
      )

      expect(build).toMatchSnapshot()
    })

    it('should work without the sortBy and get the default sortBy', () => {
      const searchBuilder = new SearchBuilder(
        'us_import',
        'shipments',
        fieldMapping
      )
      const merged = Object.assign(
        fieldMapping,
        analyticsAggregateFields,
        analyticsAnalyzeFields,
        analyticsDefaultDisplaySortBy
      )
      const builder = new AnalyticsBuilder(searchBuilder, merged)

      const build = builder.buildQuery(
        'consignees',
        [
          {
            field: 'Consignee',
            keyword: 'apple',
            operator: 'and',
            type: 'fuzzy'
          }
        ],
        [],
        [],
        [MiscTypes.BLANK_CONSIGNEES_EXCLUDED],
        '',
        5,
        '1512938867-1544475436'
      )
      const { body } = build
      const { aggs } = body
      const { shipmentAggregate } = aggs
      const { terms } = shipmentAggregate
      const { order } = terms

      expect(order).toEqual(
        expectedReturnQueryBuilder.responseOfQueryBuilderTermsOrderDefault
      )
    })

    it('should sort by according to the default field (analyticsAggregateFields)', () => {
      const searchBuilder = new SearchBuilder(
        'us_import',
        'shipments',
        fieldMapping
      )
      const merged = Object.assign(
        fieldMapping,
        analyticsAggregateFields,
        analyticsAnalyzeFields
      )
      const builder = new AnalyticsBuilder(searchBuilder, merged)

      const build = builder.buildQuery(
        'consignees',
        [
          {
            field: 'Consignee',
            keyword: 'apple',
            operator: 'and',
            type: 'fuzzy'
          }
        ],
        [],
        [],
        [MiscTypes.BLANK_CONSIGNEES_EXCLUDED],
        `weight_lb`,
        5,
        '1512938867-1544475436'
      )

      expect(build).toMatchSnapshot()
    })

    it('should throw an error on missing fieldMapping', () => {
      expect(() => {
        new AnalyticsBuilder()
      }).toThrowError('searchBuilder is required')

      expect(() => {
        const searchBuilder = new SearchBuilder(
          'us_import',
          'shipments',
          fieldMapping
        )
        new AnalyticsBuilder(searchBuilder)
      }).toThrowError('searchAnalyticsFieldMapping is required')
    })
  })
})
