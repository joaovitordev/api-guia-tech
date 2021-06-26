'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SoftwareSchema extends Schema {
  up () {
    this.create('softwares', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('softwares')
  }
}

module.exports = SoftwareSchema
