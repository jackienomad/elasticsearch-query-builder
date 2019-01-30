export const expectedQueryBuilderReturn = {
  bool: {
    must: [
      {
        bool: {
          should: [
            {
              match: {
                'Consignee.Name': {
                  query: 'apple',
                  minimum_should_match: '75%'
                }
              }
            },
            {
              match: {
                'Consignee.Name': {
                  query: 'orange',
                  minimum_should_match: '75%'
                }
              }
            }
          ]
        }
      },
      {
        exists: {
          field: 'Consignee.Name'
        }
      }
    ],
    must_not: [
      {
        match_phrase: {
          'Consignee.Cleaned Address Breakdown.PlaceName': 'IRVINE'
        }
      }
    ],
    filter: [
      {
        bool: {
          should: [
            {
              match_phrase: {
                'Consignee.Cleaned Address Breakdown.StateName.untouched': 'CA'
              }
            },
            {
              match_phrase: {
                'Consignee.Cleaned Address Breakdown.StateName.untouched': 'WA'
              }
            }
          ]
        }
      },
      {
        range: {
          'Arrival Date': {
            gte: 1534867200,
            lte: 1536192000
          }
        }
      }
    ]
  }
}
