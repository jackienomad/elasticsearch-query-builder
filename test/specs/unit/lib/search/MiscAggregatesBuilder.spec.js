import { MiscAggregatesBuilder } from 'qb/@/search/MiscAggregatesBuilder'
import { MiscTypes } from 'qb/@/search/searchUtils'
import samplefieldMapping from './dataset/sampleFieldMapping'

describe('MiscAggregatesBuilder', () => {
  describe('generateFilterObject', () => {
    it('should build filter for MiscTypes.BLANK_CONSIGNEES_EXCLUDED', () => {
      const output = MiscAggregatesBuilder.generateFilterObject(
        MiscTypes.BLANK_CONSIGNEES_EXCLUDED
      )
      expect(output).toMatchSnapshot()
    })

    it('should build filter for MiscTypes.BLANK_SHIPPERS_EXCLUDED', () => {
      const output = MiscAggregatesBuilder.generateFilterObject(
        MiscTypes.BLANK_SHIPPERS_EXCLUDED
      )
      expect(output).toMatchSnapshot()
    })

    it('should build filter for MiscTypes.MASTER_SHIPMENTS_EXCLUDED', () => {
      const output = MiscAggregatesBuilder.generateFilterObject(
        MiscTypes.MASTER_SHIPMENTS_EXCLUDED
      )
      expect(output).toMatchSnapshot()
    })

    it('should build filter for MiscTypes.HOUSE_SHIPMENTS_ONLY', () => {
      const output = MiscAggregatesBuilder.generateFilterObject(
        MiscTypes.HOUSE_SHIPMENTS_ONLY
      )
      expect(output).toMatchSnapshot()
    })

    it('should build filter for MiscTypes.MASTER_SHIPMENTS_ONLY', () => {
      const output = MiscAggregatesBuilder.generateFilterObject(
        MiscTypes.MASTER_SHIPMENTS_ONLY
      )
      expect(output).toMatchSnapshot()
    })
  })

  describe('build', () => {
    const fields = [
      'BlankConsigneesExcluded',
      'BlankShippersExcluded',
      'MasterShipmentsExcluded',
      'HouseShipmentsOnly',
      'MasterShipmentsOnly'
    ]
    const output = MiscAggregatesBuilder.build(fields, samplefieldMapping)
    expect(output).toMatchSnapshot()
  })
})
