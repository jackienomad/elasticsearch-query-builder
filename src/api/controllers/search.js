import { client } from '../models/queryBuilderModel'
import { SearchBuilder } from 'qb/@/search/SearchBuilder'
import { SearchFormatter } from 'qb/@/search/SearchFormatter'

export async function fetchShipments({
  keywords,
  include,
  exclude,
  misc,
  sortBy,
  limit,
  page,
  index,
  type,
  arrivalDate = ''
}) {
  const builder = new SearchBuilder(index, type)
  const query = builder.buildQuery(
    keywords,
    include,
    exclude,
    misc,
    sortBy,
    limit,
    page,
    arrivalDate
  )

  const resp = await client.search(query)
  return {
    total: resp.hits.total,
    max_score: resp.hits.max_score,
    data: {
      items: SearchFormatter.formatResponse(resp)
    }
  }
}

export default fetchShipments
