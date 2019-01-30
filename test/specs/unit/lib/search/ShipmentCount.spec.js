import ShipmentCount from 'qb/@/search/ShipmentCount'
import fieldMap from './dataset/sampleFieldMapping'
import { esResponse } from './dataset/shipmentCountElasticSearchResponse'

describe('class ShipmentCount', () => {
  describe('constructor', () => {
    it('should be constructible', () => {
      expect(() => new ShipmentCount()).not.toThrowError()
    })
  })

  describe('static method buildQuery', () => {
    it('should return a correct elasticsearch query', async () => {
      const country = 'us'
      const shipmentType = 'import'
      const companyId = '28a79d28abfe3f78fed5f541e9e28a6d'
      const arrivalDates = [
        {
          start: 1480762061,
          end: 1536192000
        }
      ]
      const traderTypes = ['consignee', 'shipper', 'internal']

      const query = ShipmentCount.buildQuery(
        fieldMap,
        country,
        shipmentType,
        companyId,
        arrivalDates,
        traderTypes
      )

      expect(query).toMatchSnapshot()
    })
  })

  describe('static method formatResponse', () => {
    it('should format the elasticsearch response to expected format', async () => {
      const formattedResponse = ShipmentCount.formatResponse(
        esResponse,
        [
          {
            start: 1480762061,
            end: 1536192000
          }
        ],
        ['consignee', 'shipper', 'internal'],
        'Asia/Manila'
      )
      expect(formattedResponse).toMatchSnapshot()
    })
  })
})
