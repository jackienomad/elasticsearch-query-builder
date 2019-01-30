export class SummaryBuilder {
  /*------------------------------CONSTRUCTOR------------------------------*/
  constructor(fieldMapping) {
    if (typeof fieldMapping !== 'object') {
      throw new Error('fieldMapping is required')
    }

    this.fieldMapping = fieldMapping
  }

  destroy() {
    this.fieldMapping = null
  }

  /*------------------------------METHODS------------------------------*/
  buildAggregates() {
    return this.fieldMapping.countables.reduce((acc, val) => {
      acc[val.alias] = {
        sum: {
          field: this.fieldMapping[val.field].field
        }
      }

      return acc
    }, {})
  }

  buildQuery(searchQuery, index, dateRanges) {
    const body = []
    const aggregations = this.buildAggregates()

    dateRanges.forEach(({ start, end }) => {
      const query = JSON.parse(JSON.stringify(searchQuery))

      query.bool.filter[1].range['Arrival Date'].gte = parseInt(start)
      query.bool.filter[1].range['Arrival Date'].lte = parseInt(end)

      body.push({ index: `${index}` })
      body.push({
        query,
        size: 0,
        aggregations
      })
    })

    return { body }
  }
}

export default SummaryBuilder
