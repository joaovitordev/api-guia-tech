'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class CustomException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  async handle (error, { request, response }) {
    response.status(error.status).json({
      message: error.message,
      url: request.url()
    })
  }
}

module.exports = CustomException
