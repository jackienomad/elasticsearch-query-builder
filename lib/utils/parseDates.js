const { parse, format } = require('date-fns')

const ensureMilliseconds = function(ts) {
  return Math.floor(ts / 10000000000) ? ts : ts * 1000
}

const flatten = function(arrivalDates) {
  if (typeof arrivalDates === 'string') {
    arrivalDates = arrivalDates.split(',')
  } else if (arrivalDates instanceof Array) {
    arrivalDates = arrivalDates.reduce(
      (acc, arrivalDate) => acc.concat(...arrivalDate.split(',')),
      []
    )
  }

  return arrivalDates
}

const mapDates = function(dateArray) {
  return dateArray.map(date => {
    let start = null
    let end = null

    if (date === '' || date === null || date === undefined) {
      throw new Error('Date is blank')
    }

    // check if Number
    if (Number.isNaN(+date)) {
      // check if is a range
      // check if middle character is a dash
      const middle = Math.floor(date.length / 2)
      const middleChar = date.charAt(middle)

      if (middleChar === '-') {
        // is a range
        start = date.substring(0, middle)
        end = date.substring(middle + 1)
      } else {
        start = date
        end = date
      }

      start = Number.isNaN(+start) ? start : ensureMilliseconds(+start)
      end = Number.isNaN(+end) ? end : ensureMilliseconds(+end)
    } else {
      start = ensureMilliseconds(+date)
      end = ensureMilliseconds(+date)
    }

    // standardize format
    // convert start and end to timestamp(UTC) in seconds
    start = parseDateInUTC(start)
    end = parseDateInUTC(end)

    return {
      start,
      end
    }
  })
}

const parseDateInUTC = function(arrivalDate) {
  if (arrivalDate === null || arrivalDate === undefined || arrivalDate === '') {
    throw new Error('Blank arrival date')
  }

  // check if timestamp or not
  if (typeof arrivalDate !== 'number') {
    const timePattern = /.*\d{1,2}:\d{1,2}:\d{1,2}Z?/
    // check if has time included
    if (!timePattern.test(String(arrivalDate))) {
      arrivalDate += ' 00:00:00Z'
    }
    // check if datetime is in UTC format
    if (arrivalDate.substr(-1) !== 'Z') {
      arrivalDate += 'Z'
    }
  }
  return +format(parse(arrivalDate), 'X')
}

const parseDates = function(arrivalDates) {
  // flatten arrival dates into an array
  arrivalDates = flatten(arrivalDates)
  // dates should always be a range
  arrivalDates = mapDates(arrivalDates)

  return arrivalDates
}

module.exports = {
  ensureMilliseconds,
  flatten,
  mapDates,
  parseDates,
  parseDateInUTC
}
