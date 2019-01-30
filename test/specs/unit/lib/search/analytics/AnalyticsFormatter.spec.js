import {
  expectedReturnOfElasticSearch,
  emptyResultOfBuckets
} from './expectedResultOfElasticSearch'
import { AnalyticsFormatter } from 'qb/@/search/analytics/AnalyticsFormatter'
describe('Search Analytics AnalyticsFormatter', () => {
  it('should return a blank array, no buckets', () => {
    const formatter = new AnalyticsFormatter(emptyResultOfBuckets)
    expect(formatter.format()).toEqual([])
  })

  it('should format the result of the elasticsearch', () => {
    const formatter = new AnalyticsFormatter(expectedReturnOfElasticSearch)

    expect(formatter.format()).toEqual([
      {
        containers_count: 18,
        name: 'APPLE FASTENERS',
        shipments_count: 11,
        weight_kg: 202315,
        weight_lb: '445050.00'
      },

      {
        containers_count: 16,
        name: 'APPLE INC. AI RETAIL HUB WEST',
        shipments_count: 16,
        weight_kg: 83887,
        weight_lb: '184550.00'
      },
      {
        containers_count: 7,
        name: 'RED APPLE STORES INC',
        shipments_count: 7,
        weight_kg: 12942,
        weight_lb: '28450.00'
      },
      {
        containers_count: 5,
        name: 'APPLE STAR ENTERPRISE',
        shipments_count: 5,
        weight_kg: 58938,
        weight_lb: '129650.00'
      },
      {
        containers_count: 4,
        name: 'APPLE INC C/O SYNCREON / LO 55',
        shipments_count: 4,
        weight_kg: 13324,
        weight_lb: '29300.00'
      }
    ])
  })
})
