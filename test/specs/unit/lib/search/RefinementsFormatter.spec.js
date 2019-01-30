import sampleRefinementsESResponse from './dataset/sampleRefinementsESResponse'
import { RefinementsFormatter } from 'qb/@/search/RefinementsFormatter'

describe('RefinementsFormatter', () => {
  const refinementsGroup = {
    ConsigneeCity: 'Location',
    ConsigneeState: 'Location',
    ConsigneeZipCode: 'Location',
    ShipperAddress: 'Location',
    DestinationPort: 'Transit Details',
    ForeignPort: 'Transit Details',
    CountryOfOrigin: 'Transit Details',
    Shipper: '',
    Consignee: '',
    ConsigneeStreet: '',
    NotifyPartyAddress: '',
    NotifyParty: '',
    MarksAndNumbers: '',
    BlankConsigneesExcluded: 'Miscellaneous',
    BlankShippersExcluded: 'Miscellaneous',
    MasterShipmentsExcluded: 'Miscellaneous',
    HouseShipmentsOnly: 'Miscellaneous',
    MasterShipmentsOnly: 'Miscellaneous'
  }

  describe('RefinementsFormatter.format', () => {
    const output = RefinementsFormatter.format(
      sampleRefinementsESResponse,
      refinementsGroup
    )

    it('should be able to format ES response', () => {
      expect(output).toMatchSnapshot()
    })
  })
})
