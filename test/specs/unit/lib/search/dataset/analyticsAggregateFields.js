export const analyticsAggregateFields = {
  analyticsAggregateFields: {
    containers_count: {
      mappedField: 'NumberOfContainers'
    },
    weight_kg: {
      mappedField: 'GrossWeightKgs'
    },
    weight_lb: {
      mappedField: 'GrossWeightKgs'
    },
    shipments_count: {
      mappedField: '_count'
    }
  }
}
export const analyticsDefaultDisplaySortBy = {
  analyticsDefaultDisplaySortBy: '-shipments_count'
}

export const analyticsDefaultValueShow = {
  analyticsDefaultValueShow: '5'
}

export const analyticsAnalyzeFields = {
  analyticsAnalyzeFields: {
    consignees: {
      mappedField: 'Consignee'
    },
    states: {
      mappedField: 'ConsigneeState'
    },
    shippers: {
      mappedField: 'Shipper'
    },
    us_ports: {
      mappedField: 'DestinationPort'
    },
    foreign_ports: {
      mappedField: 'ForeignPort'
    },
    origin_countries: {
      mappedField: 'CountryOfOrigin'
    }
  }
}
