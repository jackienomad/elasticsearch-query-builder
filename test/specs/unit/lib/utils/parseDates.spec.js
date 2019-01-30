import {
  ensureMilliseconds,
  flatten,
  mapDates,
  parseDates,
  parseDateInUTC
} from 'qb/@/utils/parseDates'

describe('Parse Date Module', () => {
  describe('ensureMilliseconds module tests', () => {
    const seconds = 1542168641
    const milliseconds = seconds * 1000

    it('should convert seconds timestamp to milliseconds', () => {
      expect(ensureMilliseconds(seconds)).toBe(milliseconds)
    })

    it('should not convert if timestamp is already in milliseconds', () => {
      expect(ensureMilliseconds(milliseconds)).toBe(milliseconds)
    })
  })

  describe('flatten module tests', () => {
    it('should be able to flatten string parameter', () => {
      const stringInput = '2018-11-14,1542124800,2018-11-14-1542124800'
      const expectedOutput = [
        '2018-11-14',
        '1542124800',
        '2018-11-14-1542124800'
      ]

      expect(flatten(stringInput)).toEqual(expectedOutput)
    })

    it('should be able to flatten array parameter', () => {
      const arrayInput = [
        '2018-11-14',
        '1542124800',
        '1542124800000',
        '2018-11-14-1542124800',
        '1542124800,2018-11-14-1542124800'
      ]
      const expectedOutput = [
        '2018-11-14',
        '1542124800',
        '1542124800000',
        '2018-11-14-1542124800',
        '1542124800',
        '2018-11-14-1542124800'
      ]

      expect(flatten(arrayInput)).toEqual(expectedOutput)
    })
  })

  describe('mapDates module tests', () => {
    it('should generate start and end for single dates', () => {
      const input = ['2018-11-14', '1542153600']
      const output = [
        { start: 1542153600, end: 1542153600 },
        { start: 1542153600, end: 1542153600 }
      ]
      expect(mapDates(input)).toEqual(output)
    })

    it('should split date range to start and end', () => {
      const input = ['2018-11-14-1542153600', '1542153600-1542153700']
      const output = [
        { start: 1542153600, end: 1542153600 },
        { start: 1542153600, end: 1542153700 }
      ]
      expect(mapDates(input)).toEqual(output)
    })

    it('should throw an error on blank input', () => {
      const input = ['']
      expect(() => mapDates(input)).toThrowError()
    })
  })

  describe('parseDates module tests', () => {
    it('should convert required types of date to timestamp', () => {
      const input = [
        '1542153600',
        '1542153600000',
        '2018-11-14',
        '2018-11-14T00:00:00',
        'Nov 14 2018',
        'November 14 2018',
        'Nov 14 2018 00:00:00',
        'November 14 2018 00:00:00',
        'November 14 2018 00:00:00Z'
      ]
      const output = [
        { start: 1542153600, end: 1542153600 },
        { start: 1542153600, end: 1542153600 },
        { start: 1542153600, end: 1542153600 },
        { start: 1542153600, end: 1542153600 },
        { start: 1542153600, end: 1542153600 },
        { start: 1542153600, end: 1542153600 },
        { start: 1542153600, end: 1542153600 },
        { start: 1542153600, end: 1542153600 },
        { start: 1542153600, end: 1542153600 }
      ]
      expect(parseDates(input)).toEqual(output)
    })
  })

  describe('function parseDateInUTC', () => {
    it('should throw an error for blank input', () => {
      const blankInput = ''
      expect(() => parseDateInUTC(blankInput)).toThrowError()
    })
  })
})
