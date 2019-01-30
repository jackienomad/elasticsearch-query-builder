import { expectedESResponse } from './expectedESResponse'
import { SummaryFormatter } from 'qb/@/search/summary/SummaryFormatter'
import fieldMapping from './../dataset/sampleFieldMapping'

const dateRanges = [
  {
    start: 1534867200,
    end: 1535471999
  },
  {
    start: 1535472000,
    end: 1536076799
  },
  {
    start: 1536076800,
    end: 1536192000
  }
]

describe('Search Shipment SummaryFormatter', () => {
  it('should format the response of the elasticsearch', () => {
    expect(
      SummaryFormatter.formatResponse(
        expectedESResponse,
        dateRanges,
        fieldMapping
      )
    ).toEqual({
      total: {
        shipments: 19,
        no_of_containers: 19,
        weight: 158219
      },
      items: [
        {
          label: '1534867200 - 1535471999',
          shipments: 9,
          no_of_containers: 9,
          weight: 63696
        },
        {
          label: '1535472000 - 1536076799',
          shipments: 9,
          no_of_containers: 9,
          weight: 90999
        },
        {
          label: '1536076800 - 1536192000',
          shipments: 1,
          no_of_containers: 1,
          weight: 3524
        }
      ]
    })
  })
})
