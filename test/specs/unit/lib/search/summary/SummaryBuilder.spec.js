import fieldMapping from '../dataset/sampleFieldMapping'
import { expectedQueryBuilderReturn } from './expectedQueryBuilderReturn'
import { SummaryBuilder } from 'qb/@/search/summary/SummaryBuilder'
import { SearchBuilder } from 'qb/@/search/SearchBuilder'
import Faker from 'faker'

describe('SummaryBuilder', () => {
  describe('constructor and destructor', () => {
    it('should be instantiable', () => {
      expect(() => {
        new SummaryBuilder(fieldMapping)
      }).not.toThrowError()
    })

    it('should be destroyable', () => {
      const builder = new SummaryBuilder(fieldMapping)
      expect(() => {
        builder.destroy()
      }).not.toThrowError()
    })

    it('should throw an error on missing fieldMapping', () => {
      expect(() => {
        new SummaryBuilder()
      }).toThrowError()
    })
  })

  describe('buildAggregates', () => {
    it('should build aggregates from fieldMapping', () => {
      const builder = new SummaryBuilder(fieldMapping)
      const output = builder.buildAggregates()

      expect(output).toMatchSnapshot()
    })
  })

  describe('buildQuery', () => {
    const builder = new SummaryBuilder(fieldMapping)

    const index = 'us_import'

    const dateRanges = [
      {
        start: 1534867200,
        end: 1535471999
      },
      {
        start: 1535472000,
        end: 1536076799
      },
      {
        start: 1536076800,
        end: 1536192000
      }
    ]

    afterAll(() => {
      builder.destroy()
      builder = null
    })

    it('should build query', () => {
      const output = builder.buildQuery(
        expectedQueryBuilderReturn,
        index,
        dateRanges
      )

      expect(output).toMatchSnapshot()
    })
  })
})
