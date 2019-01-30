export const expectedESResponse = [
  {
    took: 1,
    timed_out: false,
    _shards: {
      total: 10,
      successful: 10,
      failed: 0
    },
    hits: {
      total: 9,
      max_score: 0,
      hits: []
    },
    aggregations: {
      no_of_containers: {
        value: 9
      },
      weight: {
        value: 63696
      }
    },
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
    hits: {
      total: 9,
      max_score: 0,
      hits: []
    },
    aggregations: {
      no_of_containers: {
        value: 9
      },
      weight: {
        value: 90999
      }
    },
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
    hits: {
      total: 1,
      max_score: 0,
      hits: []
    },
    aggregations: {
      no_of_containers: {
        value: 1
      },
      weight: {
        value: 3524
      }
    },
    status: 200
  }
]
