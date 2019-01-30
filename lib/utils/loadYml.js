import jsYml from 'js-yaml'
import { readFileSync, existsSync } from 'fs'

export function loadYml(configFilePath) {
  const formattedFilePath = ensureYmlExt(configFilePath)
  if (!existsSync(formattedFilePath)) {
    throw Error(`Cannot find config: ${formattedFilePath}`)
  }

  return jsYml.safeLoad(readFileSync(formattedFilePath, 'utf-8'))
}

export function ensureYmlExt(configFileName) {
  const extension = configFileName
    .substring(configFileName.length - 4)
    .toLowerCase()
  const suffix = extension !== '.yml' ? '.yml' : ''

  return `${configFileName}${suffix}`
}

export function getPresetFilename(configFileName) {
  const addedSlash = configFileName.charAt(0) !== '/' ? '/' : ''
  return `${__dirname}/config${addedSlash}` + ensureYmlExt(configFileName)
}

export default loadYml
