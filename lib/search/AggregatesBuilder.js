import { FieldMappingAdapter } from './FieldMappingAdapter'

export class AggregatesBuilder {
  static build(fields, fieldMapping) {
    const fieldAdapter =
      fieldMapping instanceof FieldMappingAdapter
        ? fieldMapping
        : new FieldMappingAdapter(fieldMapping)

    const aggregations = {}
    fields.forEach(field => {
      aggregations[field] = {
        terms: {
          field: fieldAdapter.getMappedField(field, true),
          size: 100
        }
      }
    })

    return aggregations
  }
}

export default AggregatesBuilder
