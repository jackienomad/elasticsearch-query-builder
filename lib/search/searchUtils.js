export const refinementIndexes = ['keyword', 'field']
export const keywordIndexes = ['keyword', 'operator', 'type', 'field']

export const Operators = {
  AND: 'and',
  OR: 'or',
  NOT: 'not'
}
export const SearchTypes = {
  EXACT: 'exact',
  FUZZY: 'fuzzy',
  REGULAR: 'regular'
}
export const MiscTypes = {
  BLANK_CONSIGNEES_EXCLUDED: 'BlankConsigneesExcluded',
  BLANK_SHIPPERS_EXCLUDED: 'BlankShippersExcluded',
  MASTER_SHIPMENTS_EXCLUDED: 'MasterShipmentsExcluded',
  HOUSE_SHIPMENTS_ONLY: 'HouseShipmentsOnly',
  MASTER_SHIPMENTS_ONLY: 'MasterShipmentsOnly'
}

export const percentByType = {
  [SearchTypes.REGULAR]: '100%',
  [SearchTypes.FUZZY]: '75%'
}

export function getMinimumByType(type) {
  return percentByType[type]
}

export function transformArray(transformee, indexes) {
  if (transformee === undefined) {
    return []
  }
  return transformee.map(val => {
    let values = val.split(',')

    if (values.length > indexes.length) {
      const excess = values.splice(
        values.length - indexes.length + 1,
        values.length
      )
      values = [values.join(','), ...excess]
    }

    const obj = {}
    indexes.forEach((prop, index) => {
      obj[prop] = values[index]
    })
    return obj
  })
}
