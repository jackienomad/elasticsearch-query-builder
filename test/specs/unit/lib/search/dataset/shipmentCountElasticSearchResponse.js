export const esResponse = {
  responses: [
    {
      took: 1,
      timed_out: false,
      _shards: { total: 10, successful: 10, failed: 0 },
      hits: { total: 27, max_score: 0, hits: [] },
      status: 200
    },
    {
      took: 1,
      timed_out: false,
      _shards: { total: 10, successful: 10, failed: 0 },
      hits: { total: 0, max_score: 0, hits: [] },
      status: 200
    },
    {
      took: 1,
      timed_out: false,
      _shards: {
        total: 10,
        successful: 10,
        failed: 0
      },
      hits: { total: 0, max_score: 0, hits: [] },
      status: 200
    }
  ]
}

export default esResponse
