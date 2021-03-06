'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Software = use('App/Models/Software')
const CustomException = use('App/Exceptions/CustomException')

/**
 * Resourceful controller for interacting with softwares
 */
class SoftwareController {
  /**
   * Show a list of all softwares.
   * GET softwares
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const software = Software.all();

    return software;
  }

  /**
   * Render a form to be used for creating a new software.
   * GET softwares/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new software.
   * POST softwares
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single software.
   * GET softwares/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing software.
   * GET softwares/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update software details.
   * PUT or PATCH softwares/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a software with id.
   * DELETE softwares/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const software = await Software.findOrFail(params.id)

    if(software.user_id != AuthenticatorAssertionResponse.user.id) {
      return response.status(401).send({ error: 'N??o autorizado' })
    }

    await software.delete()
  }
}

module.exports = SoftwareController
