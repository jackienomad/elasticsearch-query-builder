export class AnalyticsFormatter {
  constructor(responseOfElasticSearch) {
    this.response = responseOfElasticSearch
    const { aggregations } = this.response
    const { shipmentAggregate } = aggregations
    const { buckets } = shipmentAggregate

    this.buckets = buckets
  }

  format() {
    if (this.buckets.length < 0) {
      return []
    }

    let buckets = []
    this.buckets.map(bucket => {
      const weightLb = (
        Math.floor((bucket.weight_lb.value * 2.2) / 50) * 50
      ).toFixed(2)

      buckets.push({
        name: bucket.key,
        shipments_count: bucket.doc_count,
        weight_kg: bucket.weight_kg.value,
        weight_lb: weightLb,
        containers_count: bucket.containers_count.value
      })
    })
    return buckets
  }

  destroy() {
    this.response = null
  }
}

export default AnalyticsFormatter
