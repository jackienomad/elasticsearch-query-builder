export class FieldMappingAdapter {
  /*------------------------------CONSTRUCTOR------------------------------*/
  constructor(fieldMapping) {
    if (!fieldMapping) throw new Error('fieldMapping is required')
    this.fieldMapping = fieldMapping
  }

  destroy() {
    this.fieldMapping = null
  }

  /*------------------------------METHODS------------------------------*/
  getMappedField(selectedField, isUntouched = false) {
    if (!this.fieldMapping[selectedField]) return ''

    if (isUntouched) {
      return (
        this.fieldMapping[selectedField].not_analyzed_field ||
        this.fieldMapping[selectedField].field ||
        ''
      )
    } else {
      return (
        this.fieldMapping[selectedField].field ||
        this.fieldMapping[selectedField].not_analyzed_field ||
        ''
      )
    }
  }

  getMiscField(miscField) {
    if (!this.fieldMapping[miscField]) return ''
    const correspondingField = this.fieldMapping[miscField].field

    if (!this.fieldMapping[correspondingField]) return correspondingField
    return this.fieldMapping[correspondingField].field || ''
  }
}
export default FieldMappingAdapter
