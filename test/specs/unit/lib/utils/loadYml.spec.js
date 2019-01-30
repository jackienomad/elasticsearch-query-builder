import { loadYml, getPresetFilename, ensureYmlExt } from 'qb/@/utils/loadYml'
import path from 'path'

describe('loadYml utility', () => {
  describe('function ensureYmlExt', () => {
    it('should add .yml if missing', () => {
      const input = 'sample'
      const output = ensureYmlExt(input)
      const expectedOutput = 'sample.yml'
      expect(output).toBe(expectedOutput)
    })

    it('should not add .yml if not missing', () => {
      const input = 'sample.yml'
      const output = ensureYmlExt(input)
      const expectedOutput = 'sample.yml'
      expect(output).toBe(expectedOutput)
    })

    it('should not add .yml even if yml extension is in uppercase', () => {
      const input = 'SAMPLE.YML'
      const output = ensureYmlExt(input)
      const expectedOutput = 'SAMPLE.YML'
      expect(output).toBe(expectedOutput)
    })
  })

  describe('function getPresetFilename', () => {
    it('should add slash if missing', () => {
      const input = 'sample.yml'
      const output = getPresetFilename(input)
      const expectedOutput = `/config/${input}`
      const modifiedOutput = output.substring(
        output.length - expectedOutput.length
      )
      expect(modifiedOutput).toBe(expectedOutput)
    })
    it('should not add slash if present', () => {
      const input = '/sample.yml'
      const output = getPresetFilename(input)
      const expectedOutput = `/config/${input.substring(1)}`
      const modifiedOutput = output.substring(
        output.length - expectedOutput.length
      )
      expect(modifiedOutput).toBe(expectedOutput)
    })

    it('should append extension when missing', () => {
      const input = 'sample'
      const output = getPresetFilename(input)
      const expectedOutput = `/config/${input}.yml`
      const modifiedOutput = output.substring(
        output.length - expectedOutput.length
      )
      expect(modifiedOutput).toBe(expectedOutput)
    })
  })

  describe('function loadYml', () => {
    it('it should throw an error if passed config file', () => {
      expect(() => {
        loadYml('non_existent_config')
      }).toThrowError()
    })

    it('should be able to load a valid yml file', () => {
      const ymlpath = path.resolve(__dirname, 'data', 'loadYml.sample.yml')
      const output = loadYml(ymlpath)
      expect(output).toMatchSnapshot()
    })

    it('should be able to load a valid yml file with no specified extension', () => {
      const ymlpath = path.resolve(__dirname, 'data', 'loadYml.sample')
      const output = loadYml(ymlpath)
      expect(output).toMatchSnapshot()
    })
  })
})
