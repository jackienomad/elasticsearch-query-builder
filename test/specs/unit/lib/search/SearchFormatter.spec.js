import sampleESResponse from './dataset/sampleESResponse'
import { SearchFormatter } from 'qb/@/search/SearchFormatter'

describe('SearchFormatter', () => {
  it('should be able to format ES response', () => {
    const formattedResponse = SearchFormatter.formatResponse(sampleESResponse)
    expect(formattedResponse).toMatchSnapshot()
  })
})
