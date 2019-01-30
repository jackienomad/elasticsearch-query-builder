import { formatToTimeZone, parseFromTimeZone } from 'date-fns-timezone'

export function generateQuery(
  start,
  end,
  companyId,
  traderType,
  arrivalDateField,
  consigneeField,
  shipperField
) {
  // build query
  const query = {
    size: 0,
    query: {
      bool: {
        filter: [
          {
            bool: {
              must: []
            }
          },
          {
            range: {
              [arrivalDateField]: {
                gte: start
              }
            }
          },
          {
            range: {
              [arrivalDateField]: {
                lte: end
              }
            }
          }
        ]
      }
    }
  }

  // add trader type filter
  if (traderType === 'consignee' || traderType === 'internal') {
    query.query.bool.filter[0].bool.must.push({
      term: {
        [consigneeField]: companyId
      }
    })
  }

  if (traderType === 'shipper' || traderType === 'internal') {
    query.query.bool.filter[0].bool.must.push({
      term: {
        [shipperField]: companyId
      }
    })
  }

  return query
}

export class ShipmentCount {
  constructor() {}

  static buildQuery(
    fieldMap,
    country,
    shipmentType,
    companyId,
    arrivalDates,
    traderTypes
  ) {
    const body = []

    const arrivalDateField = fieldMap['ArrivalDate']['field']
    const consigneeField = fieldMap['ConsigneeId']['field']
    const shipperField = fieldMap['ShipperId']['field']

    const queries = {
      consignee: [],
      shipper: [],
      internal: []
    }

    arrivalDates.forEach(({ start, end }) => {
      traderTypes.forEach(traderType => {
        queries[traderType].push({ index: `${country}_${shipmentType}` })
        queries[traderType].push(
          generateQuery(
            start,
            end,
            companyId,
            traderType,
            arrivalDateField,
            consigneeField,
            shipperField
          )
        )
      })
    })

    body.push(...queries['consignee'])
    body.push(...queries['shipper'])
    body.push(...queries['internal'])

    return { body }
  }

  static formatResponse(esResponse, arrivalDates, traderTypes, timezone) {
    const traderTypeCount = traderTypes.length
    const esResponseCount = esResponse.responses.length
    const margin = esResponseCount / traderTypeCount
    const arrivalDatesCount = arrivalDates.length

    const formattedResponse = esResponse.responses.map((response, index) => ({
      from: +formatToTimeZone(
        parseFromTimeZone(
          arrivalDates[index % arrivalDatesCount].start * 1000,
          {
            timeZone: 'Africa/Accra'
          }
        ),
        'X',
        { timeZone: timezone }
      ),
      to: +formatToTimeZone(
        parseFromTimeZone(arrivalDates[index % arrivalDatesCount].end * 1000, {
          timeZone: 'Africa/Accra'
        }),
        'X',
        { timeZone: timezone }
      ),
      totalShipments: response.hits.total,
      traderType: traderTypes[Math.floor(index / margin)]
    }))
    return formattedResponse
  }
}

export default ShipmentCount
