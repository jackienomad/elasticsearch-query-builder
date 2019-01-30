import { AggregatesBuilder } from 'qb/@/search/AggregatesBuilder'
import fieldMapping from './dataset/sampleFieldMapping'

describe('AggregatesBuilder', () => {
  const fields = [
    'NotifyParty',
    'CountryOfOrigin',
    'ConsigneeStreet',
    'ConsigneeZipCode',
    'ForeignPort',
    'DestinationPort',
    'ConsigneeState',
    'ConsigneeCity',
    'Consignee',
    'Shipper',
    'ShipperAddress',
    'NotifyPartyAddress',
    'MarksAndNumbers'
  ]

  it('should build an aggregates object', () => {
    const output = AggregatesBuilder.build(fields, fieldMapping)
    expect(output).toMatchSnapshot(output)
  })
})
