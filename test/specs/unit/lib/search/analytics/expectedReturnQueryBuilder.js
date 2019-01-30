export const expectedReturnOfABuilder = {
  index: 'Sudanese Pound',
  type: 'moderator',
  body: {
    size: 5,
    from: -5,
    track_scores: true,
    sort: [
      {
        'Number of Containers': {
          order: 'desc'
        }
      },
      '_score'
    ],
    query: {
      bool: {
        must: [
          {
            bool: {
              should: [
                {
                  match: {
                    'Consignee.Name': {
                      query: 'Chicago',
                      minimum_should_match: '75%'
                    }
                  }
                }
              ]
            }
          },
          {
            bool: {
              should: [
                {
                  match_phrase: {
                    'Shipper.Name': 'Chicago'
                  }
                },
                {
                  match: {
                    'Shipper.Name': {
                      query: 'Chicago',
                      minimum_should_match: '100%'
                    }
                  }
                }
              ]
            }
          },
          {
            bool: {
              should: [
                {
                  match_phrase: {
                    'Containers.Cargoes.Description': 'orange'
                  }
                }
              ]
            }
          }
        ],
        must_not: [
          {
            match_phrase: {
              'Containers.Cargoes.Description': 'apple'
            }
          },
          {
            match_phrase: {
              'Country of Origin': 'ph'
            }
          },
          {
            match_phrase: {
              'Port of Unlading': 'Port of Los Angeles'
            }
          },
          {
            match_phrase: {
              'Consignee.Name': ''
            }
          }
        ],
        filter: [
          {
            bool: {
              should: [
                {
                  match_phrase: {
                    'Consignee.Cleaned Address Breakdown.PlaceName.untouched':
                      'Chicago'
                  }
                },
                {
                  match_phrase: {
                    'Consignee.Cleaned Address Breakdown.PlaceName.untouched':
                      'Los Angeles'
                  }
                }
              ]
            }
          },
          {
            bool: {
              should: [
                {
                  match_phrase: {
                    'Consignee.Cleaned Address Breakdown.StateName.untouched':
                      'Arizona'
                  }
                }
              ]
            }
          },
          {
            range: {
              'Arrival Date': {
                gte: '1512938867',
                lte: '1544475436'
              }
            }
          }
        ]
      }
    }
  }
}

export const buildeQuery = []

export const responseOfQueryBuilderTermsOrderDefault = [{ _count: 'desc' }]
