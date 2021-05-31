'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BipSchema extends Schema {
  up () {
    this.create('bips', (table) => {
      table.increments()
      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('error_title').notNullable()
      table.string('solution').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('bips')
  }
}

module.exports = BipSchema
