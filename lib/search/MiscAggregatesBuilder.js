import { FieldMappingAdapter } from './FieldMappingAdapter'
import { MiscTypes } from './searchUtils'

export class MiscAggregatesBuilder {
  static generateFilterObject(misc) {
    let filter
    if (misc === MiscTypes.BLANK_CONSIGNEES_EXCLUDED) {
      filter = {
        exists: {
          field: 'Consignee'
        }
      }
    } else if (misc === MiscTypes.BLANK_SHIPPERS_EXCLUDED) {
      filter = {
        exists: {
          field: 'Shipper'
        }
      }
    } else if (misc === MiscTypes.MASTER_SHIPMENTS_EXCLUDED) {
      return {
        bool: {
          must_not: {
            match_phrase: {
              Consignee: 'Master'
            }
          }
        }
      }
    } else if (misc === MiscTypes.HOUSE_SHIPMENTS_ONLY) {
      filter = {
        bool: {
          should: [
            {
              match_phrase: {
                'Bill Type': 'H'
              }
            },
            {
              match_phrase: {
                'Bill Type': 'House'
              }
            }
          ]
        }
      }
    } else if (misc === MiscTypes.MASTER_SHIPMENTS_ONLY) {
      filter = {
        bool: {
          must: {
            match_phrase: {
              'Bill Type': 'Master'
            }
          }
        }
      }
    }

    return filter
  }

  static build(fields, fieldMapping) {
    const fieldAdapter =
      fieldMapping instanceof FieldMappingAdapter
        ? fieldMapping
        : new FieldMappingAdapter(fieldMapping)

    const aggregations = {}
    fields.forEach(field => {
      aggregations[field] = {
        filter: MiscAggregatesBuilder.generateFilterObject(field)
      }
    })

    return aggregations
  }
}

export default MiscAggregatesBuilder
