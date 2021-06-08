'use strict'

const BipController = require('./BipController')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const BlueScreen = use('App/Models/BlueScreen')
const CustomException = use('App/Exceptions/CustomException')

/**
 * Resourceful controller for interacting with bluescreens
 */
class BlueScreenController {
  /**
   * Show a list of all bluescreens.
   * GET bluescreens
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const bluescreen = BlueScreen.all()

    return bluescreen
  }

  /**
   * Create/save a new bluescreen.
   * POST bluescreens
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const { id } = auth.user

    const data = request.only([
      'error_title',
      'solution'
    ])

    const blueScreen = await BipController.create({ ...data, user_id: id })

    if(!blueScreen) {
      throw new CustomException('Erro ao cadastrar tela azul', 404)
    }

    return blueScreen
  }

  /**
   * Display a single bluescreen.
   * GET bluescreens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing bluescreen.
   * GET bluescreens/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update bluescreen details.
   * PUT or PATCH bluescreens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a bluescreen with id.
   * DELETE bluescreens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = BlueScreenController
