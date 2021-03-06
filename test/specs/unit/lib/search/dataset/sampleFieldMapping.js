export default {
  Containers: {
    display_name: 'Containers',
    available: false,
    searchable: false,
    sortable: false,
    field: 'Containers'
  },
  Score: {
    display_name: 'Relevance Score',
    available: false,
    field: '_score'
  },
  NotifyParty: {
    display_name: 'Notify Party',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Notify Party.Name',
    not_analyzed_field: 'Notify Party.Name.untouched'
  },
  NotifyPartyAddress: {
    display_name: 'Notify Party Address',
    available: true,
    searchable: true,
    sortable: false,
    field: 'Notify Party.Cleaned Address',
    not_analyzed_field: 'Notify Party.Cleaned Address.untouched'
  },
  ProductDescription: {
    display_name: 'Product',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Containers.Cargoes.Description',
    not_analyzed_field: 'Containers.Cargoes.Description.untouched'
  },
  BillOfLading: {
    display_name: 'Bill of Lading Number',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Bill of Lading Number',
    not_analyzed_field: 'Bill of Lading Number.untouched'
  },
  ConsigneeId: {
    display_name: 'Consignee Id',
    available: false,
    searchable: false,
    sortable: false,
    field: 'Consignee._id',
    not_analyzed_field: 'Consignee._id'
  },
  Consignee: {
    display_name: 'Consignee',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Consignee.Name',
    not_analyzed_field: 'Consignee.Name.untouched'
  },
  ConsigneeStreetNumber: {
    display_name: 'Consignee Street Number',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Consignee.Cleaned Address Breakdown.AddressNumber',
    not_analyzed_field:
      'Consignee.Cleaned Address Breakdown.AddressNumber.untouched'
  },
  ConsigneeStreet: {
    display_name: 'Consignee Street Name',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Consignee.Cleaned Address Breakdown.StreetName',
    not_analyzed_field:
      'Consignee.Cleaned Address Breakdown.StreetName.untouched'
  },
  ConsigneeCity: {
    display_name: 'Consignee City',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Consignee.Cleaned Address Breakdown.PlaceName',
    not_analyzed_field:
      'Consignee.Cleaned Address Breakdown.PlaceName.untouched'
  },
  ConsigneeState: {
    display_name: 'Consignee State',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Consignee.Cleaned Address Breakdown.StateName',
    not_analyzed_field:
      'Consignee.Cleaned Address Breakdown.StateName.untouched'
  },
  ConsigneeZipCode: {
    display_name: 'Consignee Zip Code',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Consignee.Cleaned Address Breakdown.ZipCode',
    not_analyzed_field: 'Consignee.Cleaned Address Breakdown.ZipCode.untouched'
  },
  ConsigneeAddressBreakdown: {
    display_name: 'Consignee Address Details',
    available: true,
    searchable: true,
    sortable: false,
    field: 'Consignee.Cleaned Address Breakdown'
  },
  ConsigneeAddress: {
    display_name: 'Consignee Address',
    available: true,
    searchable: true,
    sortable: false,
    field: 'Consignee.Address',
    not_analyzed_field: 'Consignee.Address.untouched'
  },
  ShipperId: {
    display_name: 'Shipper Id',
    available: false,
    searchable: false,
    sortable: false,
    field: 'Shipper._id',
    not_analyzed_field: 'Shipper._id'
  },
  Shipper: {
    display_name: 'Shipper',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Shipper.Name',
    not_analyzed_field: 'Shipper.Name.untouched'
  },
  ShipperAddress: {
    display_name: 'Shipper Address',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Shipper.Address',
    not_analyzed_field: 'Shipper.Address.untouched'
  },
  CountryOfOrigin: {
    display_name: 'Country of Origin',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Country of Origin',
    not_analyzed_field: 'Country of Origin.untouched'
  },
  ForeignPort: {
    display_name: 'Foreign Port',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Foreign Port of Lading',
    not_analyzed_field: 'Foreign Port of Lading.untouched'
  },
  CarrierName: {
    display_name: 'Carrier Name',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Carrier.Name',
    not_analyzed_field: 'Carrier.Name.untouched'
  },
  CarrierCode: {
    display_name: 'Carrier Code',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Carrier.Code',
    not_analyzed_field: 'Carrier.Code.untouched'
  },
  DistributionPort: {
    display_name: 'Distribution Port',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Port of Destination',
    not_analyzed_field: 'Port of Destination.untouched'
  },
  InBondEntryType: {
    display_name: 'In-Bond Entry Type',
    available: true,
    searchable: true,
    sortable: true,
    field: 'In-Bond Entry Type',
    not_analyzed_field: 'In-Bond Entry Type.untouched'
  },
  MarksAndNumbers: {
    display_name: 'Marks And Numbers',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Containers.Marks',
    not_analyzed_field: 'Containers.Marks.untouched'
  },
  MasterBillOfLading: {
    display_name: 'Master Bill of Lading Number',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Master Bill of Lading Number',
    not_analyzed_field: 'Master Bill of Lading Number.untouched'
  },
  DestinationPort: {
    display_name: 'US Port',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Port of Unlading',
    not_analyzed_field: 'Port of Unlading.untouched'
  },
  AllFields: {
    available: false,
    display_name: 'All Fields',
    field: '_all'
  },
  ShipmentId: {
    display_name: 'Shipment Id',
    available: true,
    searchable: true,
    sortable: true,
    field: '_id'
  },
  BillTypeCode: {
    display_name: 'Bill Type',
    available: true,
    searchable: true,
    sortable: false,
    field: 'Bill Type'
  },
  ContainerHeight: {
    display_name: 'Container Height',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Containers.Height'
  },
  ContainerLength: {
    display_name: 'Container Length',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Containers.Length'
  },
  ContainerNumber: {
    display_name: 'Container Number',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Containers.Container Number',
    not_analyzed_field: 'Containers.Container Number.untouched'
  },
  ContainerType: {
    display_name: 'Container Type',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Containers.Type'
  },
  ContainerWidth: {
    display_name: 'Container Width',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Containers.Width'
  },
  EquipmentDescriptionCode: {
    display_name: 'Equipment Description Code',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Containers.Equipment Description'
  },
  SealNumbers: {
    display_name: 'Seal Numbers',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Containers.Seal Numbers'
  },
  ManifestNumber: {
    display_name: 'Manifest Number',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Manifest Number'
  },
  Measurement: {
    display_name: 'Measurement',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Measurement'
  },
  MeasurementUnit: {
    display_name: 'Measurement Unit',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Measurement Unit'
  },
  CarrierAddress: {
    display_name: 'Carrier Address',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Carrier.Address'
  },
  CarrierCity: {
    display_name: 'Carrier City',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Carrier.City'
  },
  CarrierState: {
    display_name: 'Carrier State',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Carrier.State'
  },
  CarrierZip: {
    display_name: 'Carrier Zip Code',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Carrier.Zip Code'
  },
  LoadStatus: {
    display_name: 'Load Status',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Containers.Load Status'
  },
  NumberOfContainers: {
    display_name: 'Number Of Containers',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Number of Containers'
  },
  PlaceOfReceipt: {
    display_name: 'Place of Receipt',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Place of Receipt'
  },
  Quantity: {
    display_name: 'Quantity',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Manifest Quantity'
  },
  QuantityUnit: {
    display_name: 'Quantity Unit',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Manifest Unit'
  },
  TypeOfService: {
    display_name: 'Type Of Service',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Type Of Service'
  },
  VesselName: {
    display_name: 'Vessel Name',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Vessel Name'
  },
  VoyageNumber: {
    display_name: 'Voyage Number',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Voyage Number'
  },
  ArrivalDate: {
    display_name: 'Arrival Date',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Arrival Date'
  },
  GrossWeightKgs: {
    display_name: 'Gross Weight Kgs',
    available: true,
    searchable: true,
    sortable: true,
    field: 'Weight'
  },
  GrossWeightLbs: {
    display_name: 'Gross Weight Lbs',
    available: true,
    searchable: true,
    sortable: true,
    field: 'WeightLbs'
  },
  ProductKeywords: {
    display_name: 'Keywords',
    available: true,
    searchable: false,
    sortable: false,
    field: 'Containers.Cargoes.Keywords'
  },
  HSCode: {
    display_name: 'HS Code',
    available: true,
    searchable: false,
    sortable: false,
    field: 'Containers.Cargoes.HS Code'
  },
  BlankConsigneesExcluded: {
    display_name: 'Exclude Blank Consignee',
    field: 'Consignee',
    sortable: false
  },
  BlankShippersExcluded: {
    display_name: 'Exclude Blank Shipper',
    field: 'Shipper',
    sortable: false
  },
  MasterShipmentsExcluded: {
    display_name: 'Exclude Master Shipments',
    field: 'Bill Type',
    sortable: false
  },
  HouseShipmentsOnly: {
    display_name: 'House Shipments Only',
    field: 'Bill Type',
    sortable: false
  },
  MasterShipmentsOnly: {
    display_name: 'Master Shipments Only',
    field: 'Bill Type',
    sortable: false
  },
  countables: [
    {
      field: 'NumberOfContainers',
      alias: 'no_of_containers'
    },
    {
      field: 'GrossWeightKgs',
      alias: 'weight'
    }
  ]
}
