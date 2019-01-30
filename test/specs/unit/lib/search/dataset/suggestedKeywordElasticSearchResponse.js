import Faker from 'faker'

export const expectedResponseOfSuggestedKeyword = fields => {
  let result = {
    responses: []
  }
  fields.forEach(() => {
    const data = {
      took: Faker.random.number(),
      timed_out: false,
      _shards: {
        total: Faker.random.number(),
        successful: Faker.random.number(),
        failed: Faker.random.number()
      },
      aggregations: {
        Suggestion: {
          doc_count_error_upper_bound: Faker.random.number(),
          sum_other_doc_count: Faker.random.number(),
          buckets: [
            {
              key: Faker.random.word(),
              doc_count: 1
            },
            {
              key: Faker.random.word(),
              doc_count: 1
            },
            {
              key: Faker.random.word(),
              doc_count: 1
            },
            {
              key: Faker.random.word(),
              doc_count: 1
            },
            {
              key: Faker.random.word(),
              doc_count: 1
            }
          ]
        }
      },
      status: 200
    }

    result.responses.push(data)
  })
  return result
}

export const generatemSearchEmptyResponse = fields => {
  let result = {
    responses: []
  }
  fields.forEach(() => {
    const data = {
      took: Faker.random.number(),
      timed_out: false,
      _shards: {
        total: Faker.random.number(),
        successful: Faker.random.number(),
        failed: Faker.random.number()
      },
      aggregations: {
        Suggestion: {
          doc_count_error_upper_bound: Faker.random.number(),
          sum_other_doc_count: Faker.random.number(),
          buckets: []
        }
      },
      status: 200
    }

    result.responses.push(data)
  })
  return result
}
