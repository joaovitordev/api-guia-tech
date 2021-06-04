'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Bip = use('App/Models/Bip')
const CustomException = use('App/Exceptions/CustomException')

/**
 * Resourceful controller for interacting with bips
 */
class BipController {
  /**
   * Show a list of all bips.
   * GET bips
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const bips = Bip.all()

    return bips
  }

  /**
   * Create/save a new bip.
   * POST bips
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

    const bip = await Bip.create({ ...data, user_id: id })

    if (!bip) {
      throw new CustomException('Erro ao cadastrar Bip', 404);
    }

    return bip
  }

  /**
   * Display a single bip.
   * GET bips/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    const bip = await Bip.find(params.id)

    if (!bip) {
      throw new CustomException('Bip não encontrado', 404);
    }

    return bip
  }

  /**
   * Update bip details.
   * PUT or PATCH bips/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const bip = await Bip.findOrFail(params.id)

    const data = request.only([
      'error_title',
      'solution'
    ])

    bip.merge(data)

    await bip.save()

    return bip
  }

  /**
   * Delete a bip with id.
   * DELETE bips/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    const bip = await Bip.findOrFail(params.id)

    if(bip.user_id != AuthenticatorAssertionResponse.user.id) {
      return response.status(401).send({ error: 'Não autorizado' })
    }

    await bip.delete()
  }
}

module.exports = BipController
