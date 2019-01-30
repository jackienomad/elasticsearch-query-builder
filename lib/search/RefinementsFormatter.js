export class RefinementsFormatter {
  static format(response, refinementGroups) {
    return Object.keys(response.aggregations)
      .map(field => {
        const refinementGroup = {
          field,
          category: refinementGroups[field]
        }

        if (response.aggregations[field].buckets) {
          refinementGroup.totalRefinements =
            response.aggregations[field].buckets.length
          refinementGroup.refinements = response.aggregations[
            field
          ].buckets.map(({ key: name, doc_count: count }) => ({
            name,
            count
          }))
        } else {
          // miscellaneous
          refinementGroup.totalCount =
            response.aggregations[field].doc_count || 0
        }

        return refinementGroup
      })
      .sort(({ field: field1 }, { field: field2 }) => {
        const ucField1 = field1.toUpperCase()
        const ucField2 = field2.toUpperCase()
        if (ucField1 < ucField2) {
          return -1
        } else if (ucField2 < ucField1) {
          return 1
        }

        return 0
      })
  }
}

export default RefinementsFormatter
