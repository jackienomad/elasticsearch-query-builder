export class SummaryFormatter {
  static formatResponse(responses, dateRanges, fieldMapping) {
    const total = {
      shipments: 0
    }

    fieldMapping.countables.forEach(countable => {
      total[countable.alias] = 0
    })

    const items = responses.map((response, index) => {
      const periodCount = fieldMapping.countables.reduce(
        (acc, countable) => {
          acc[countable.alias] = response.aggregations[countable.alias].value
          total[countable.alias] += acc[countable.alias]
          return acc
        },
        { shipments: response.hits.total }
      )

      total.shipments += response.hits.total

      return {
        label: `${dateRanges[index].start} - ${dateRanges[index].end}`,
        ...periodCount
      }
    })

    return { total, items }
  }
}

export default SummaryFormatter
