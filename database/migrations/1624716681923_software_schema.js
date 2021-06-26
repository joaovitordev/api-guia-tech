'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SoftwareSchema extends Schema {
  up () {
    this.create('softwares', (table) => {
      table.increments()
      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('error_title').notNullable()
      table.string('additional_information')
      table.string('explanation')
      table.string('solution').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('softwares')
  }
}

module.exports = SoftwareSchema
