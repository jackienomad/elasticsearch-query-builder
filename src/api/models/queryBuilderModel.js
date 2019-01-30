import elasticsearch from 'elasticsearch'

export const client = new elasticsearch.Client({
  hosts:
    process.env.ELASTIC_SEARCH_HOST + ':' + process.env.ELASTIC_SEARCH_PORT,
  log: 'error'
})
