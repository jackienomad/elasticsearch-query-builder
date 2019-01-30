import fieldMapping from './dataset/sampleFieldMapping'
import FieldMappingAdapter from 'qb/@/search/FieldMappingAdapter'
import { MiscTypes } from 'qb/@/search/searchUtils'

describe('FieldMappingAdapter', () => {
  describe('Constructor', () => {
    let adapter

    it('should be constructible', () => {
      expect(() => {
        adapter = new FieldMappingAdapter(fieldMapping)
      }).not.toThrowError()
    })

    it('should throw an error on empty fieldMapping', () => {
      expect(() => {
        adapter = new FieldMappingAdapter()
      }).toThrowError()
    })

    it('should be destroyable', () => {
      expect(() => {
        adapter.destroy()
        adapter = null
      }).not.toThrowError()
    })
  })

  describe('getMappedField', () => {
    let adapter
    beforeEach(() => {
      adapter = new FieldMappingAdapter(fieldMapping)
    })
    afterEach(() => {
      adapter.destroy()
      adapter = null
    })

    it('Product Description should return configured value', () => {
      const actual = adapter.getMappedField('ProductDescription')
      expect(actual).toMatchInlineSnapshot(`"Containers.Cargoes.Description"`)
    })

    it('Consignee should return configured value', () => {
      const actual = adapter.getMappedField('Consignee')
      expect(actual).toMatchInlineSnapshot(`"Consignee.Name"`)
    })

    it('Shipper should return configured value', () => {
      const actual = adapter.getMappedField('Shipper')
      expect(actual).toMatchInlineSnapshot(`"Shipper.Name"`)
    })

    it('Marks And Numbers should return configured value', () => {
      const actual = adapter.getMappedField('MarksAndNumbers')
      expect(actual).toMatchInlineSnapshot(`"Containers.Marks"`)
    })

    it('All Fields should return configured value', () => {
      const actual = adapter.getMappedField('AllFields')
      expect(actual).toMatchInlineSnapshot(`"_all"`)
    })

    it('ConsigneeCity should return configured type', () => {
      const actual = adapter.getMappedField('ConsigneeCity')
      expect(actual).toMatchInlineSnapshot(
        `"Consignee.Cleaned Address Breakdown.PlaceName"`
      )
    })

    it('ConsigneeState should return configured type', () => {
      const actual = adapter.getMappedField('ConsigneeState')
      expect(actual).toMatchInlineSnapshot(
        `"Consignee.Cleaned Address Breakdown.StateName"`
      )
    })

    it('ConsigneeZipcode should return configured type', () => {
      const actual = adapter.getMappedField('ConsigneeZipcode')
      expect(actual).toMatchInlineSnapshot(`""`)
    })

    it('ShipperAddress should return configured type', () => {
      const actual = adapter.getMappedField('ShipperAddress')
      expect(actual).toMatchInlineSnapshot(`"Shipper.Address"`)
    })

    it('CountryOfOrigin should return configured type', () => {
      const actual = adapter.getMappedField('CountryOfOrigin')
      expect(actual).toMatchInlineSnapshot(`"Country of Origin"`)
    })

    it('DestinationPort should return configured type', () => {
      const actual = adapter.getMappedField('DestinationPort')
      expect(actual).toMatchInlineSnapshot(`"Port of Unlading"`)
    })

    it('ForeignPort should return configured type', () => {
      const actual = adapter.getMappedField('ForeignPort')
      expect(actual).toMatchInlineSnapshot(`"Foreign Port of Lading"`)
    })
  })

  describe('getMiscField', () => {
    let adapter
    beforeEach(() => {
      adapter = new FieldMappingAdapter(fieldMapping)
    })
    afterEach(() => {
      adapter.destroy()
      adapter = null
    })

    it('BlankConsigneesExcluded should return configured value', () => {
      const actual = adapter.getMiscField(MiscTypes.BLANK_CONSIGNEES_EXCLUDED)
      expect(actual).toMatchInlineSnapshot(`"Consignee.Name"`)
    })

    it('BlankShippersExcluded should return configured value', () => {
      const actual = adapter.getMiscField(MiscTypes.BLANK_SHIPPERS_EXCLUDED)
      expect(actual).toMatchInlineSnapshot(`"Shipper.Name"`)
    })

    it('MasterShipmentsExcluded should return configured value', () => {
      const actual = adapter.getMiscField(MiscTypes.MASTER_SHIPMENTS_EXCLUDED)
      expect(actual).toMatchInlineSnapshot(`"Bill Type"`)
    })

    it('HouseShipmentsOnly should return configured value', () => {
      const actual = adapter.getMiscField(MiscTypes.HOUSE_SHIPMENTS_ONLY)
      expect(actual).toMatchInlineSnapshot(`"Bill Type"`)
    })

    it('MasterShipmentsOnly should return configured value', () => {
      const actual = adapter.getMiscField(MiscTypes.MASTER_SHIPMENTS_ONLY)
      expect(actual).toMatchInlineSnapshot(`"Bill Type"`)
    })

    it('Invalid misc field should return empty string', () => {
      const actual = adapter.getMiscField('InvalidMiscField')
      expect(actual).toBe('')
    })
  })
})
