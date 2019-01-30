export class SearchFormatter {
  static formatResponse(esResponse) {
    return esResponse.hits.hits.map(({ _id, _source }) => ({
      ArrivalDate: _source['Arrival Date'] || '',
      BillOfLading: _source['Bill of Lading Number'] || '',
      BillTypeCode: _source['Bill Type'] || '',
      CarrierAddress: _source['Carrier']['Address'] || '',
      CarrierCity: (_source['Carrier'] && _source['Carrier']['City']) || '',
      CarrierCode: (_source['Carrier'] && _source['Carrier']['Code']) || '',
      CarrierName: (_source['Carrier'] && _source['Carrier']['Name']) || '',
      CarrierState: (_source['Carrier'] && _source['Carrier']['State']) || '',
      CarrierZip: (_source['Carrier'] && _source['Carrier']['Zip Code']) || '',
      Consignee: (_source['Consignee'] && _source['Consignee']['Name']) || '',
      ConsigneeAddress:
        (_source['Consignee'] && _source['Consignee']['Address']) || '',
      ConsigneeAddressBreakdown:
        _source['Consignee'] &&
        _source['Consignee']['Cleaned Address Breakdown'],
      ConsigneeCity:
        (_source['Consignee'] &&
          _source['Consignee']['Cleaned Address Breakdown'] &&
          _source['Consignee']['Cleaned Address Breakdown']['PlaceName']) ||
        '',
      ConsigneeId:
        (_source['Consignee'] &&
          _source['Consignee']['Cleaned Address Breakdown'] &&
          _source['Consignee']['Cleaned Address Breakdown']['_id']) ||
        '',
      ConsigneeState:
        (_source['Consignee'] &&
          _source['Consignee']['Cleaned Address Breakdown'] &&
          _source['Consignee']['Cleaned Address Breakdown']['StateName']) ||
        '',
      ConsigneeStreet:
        (_source['Consignee'] &&
          _source['Consignee']['Cleaned Address Breakdown'] &&
          _source['Consignee']['Cleaned Address Breakdown']['StreetName']) ||
        '',
      ConsigneeStreetNumber:
        (_source['Consignee'] &&
          _source['Consignee']['Cleaned Address Breakdown'] &&
          _source['Consignee']['Cleaned Address Breakdown']['AddressNumber']) ||
        '',
      ConsigneeZipCode:
        (_source['Consignee'] &&
          _source['Consignee']['Cleaned Address Breakdown'] &&
          _source['Consignee']['Cleaned Address Breakdown']['ZipCode']) ||
        '',
      ContainerHeight:
        (_source['Containers']['0'] && _source['Containers']['0']['Height']) ||
        '',
      ContainerLength:
        (_source['Containers']['0'] && _source['Containers']['0']['Length']) ||
        '',
      ContainerNumber:
        (_source['Containers']['0'] &&
          _source['Containers']['0']['Container Number']) ||
        '',
      ContainerType:
        (_source['Containers']['0'] && _source['Containers']['0']['Type']) ||
        '',
      ContainerWidth:
        (_source['Containers']['0'] && _source['Containers']['0']['Width']) ||
        '',
      Containers: _source['Containers'] || '',
      CountryOfOrigin: _source['Country of Origin'] || '',
      DestinationPort: _source['Port of Destination'] || '',
      EquipmentDescriptionCode:
        (_source['Containers']['0'] &&
          _source['Containers']['0']['Equipment Description']) ||
        '',
      ForeignPort: _source['Foreign Port of Lading'] || '',
      GrossWeightKgs: _source['Weight'] || '',
      GrossWeightLbs: _source['Weight'] || '',
      HSCode: _source['HS Code'] || '',
      InBondEntryType: _source['In-Bond Entry Type'] || '',
      LoadStatus:
        _source['Containers']['0'] && _source['Containers']['0']['Load Status'],
      ManifestNumber: _source['Manifest Number'] || '',
      MarksAndNumbers:
        (_source['Containers']['0'] && _source['Containers']['0']['Marks']) ||
        '',
      MasterBillOfLading: _source['Master Bill of Lading Number'] || '',
      Measurement: _source['Measurement'] || '',
      MeasurementUnit: _source['Measurement Unit'] || '',
      NotifyParty:
        (_source['Notify Party'] && _source['Notify Party']['Name']) || '',
      NotifyPartyAddress:
        (_source['Notify Party'] && _source['Notify Party']['Address']) || '',
      NumberOfContainers: _source['Number of Containers'] || '',
      PlaceOfReceipt: _source['Place of Receipt'] || '',
      ProductDescription:
        (_source['Containers']['0']['Cargoes'] &&
          _source['Containers']['0']['Cargoes']['Description']) ||
        '',
      ProductKeywords:
        (_source['Containers']['0']['Cargoes'] &&
          _source['Containers']['0']['Cargoes']['Keywords']) ||
        '',
      Quantity: _source['Manifest Quantity'] || '',
      QuantityUnit: _source['Manifest Unit'] || '',
      SealNumbers:
        _source['Containers']['0'] &&
        _source['Containers']['0']['Seal Numbers'],
      ShipmentId: _id || '',
      Shipper: (_source['Shipper'] && _source['Shipper']['Name']) || '',
      ShipperAddress:
        (_source['Shipper'] && _source['Shipper']['Address']) || '',
      ShipperId: (_source['Shipper'] && _source['Shipper']['_id']) || '',
      TypeOfService:
        (_source['Containers'] && _source['Containers']['Type of Service']) ||
        '',
      VesselName: _source['Vessel Name'] || '',
      VoyageNumber: _source['Voyage Number'] || ''
    }))
  }
}

export default SearchFormatter
