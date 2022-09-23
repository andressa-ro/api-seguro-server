const Cotacao = require("../models/CotacaoModel");
const { cotarSeguro } = require("../services/CotacaoService");

module.exports = {
  async process(request, response) {
    try {
      if (request.body.hasOwnProperty('bem') && request.body.hasOwnProperty('valor_do_bem') && request.body.hasOwnProperty('quantidade_parcelas')) {
        const cotacao = cotarSeguro(request.body.bem, request.body.valor_do_bem, request.body.quantidade_parcelas);
        response.status(200).json(cotacao);
      }
      else {
        response.status(400).send("Objeto de requisição deve conter atributo bem, quantidade_parcelas e valor_do_bem");
      }
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async create(request, response) {
    try {
      const cotacao = await Cotacao.create({usuario_id: request.params.id_usuario, ...request.body});
      response.status(201).json(cotacao);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async getByUser(request, response) {
    try {
      const id = request.params.id_usuario;
      const cotacoes = await Cotacao.findAll({ where: {'usuario_id': id } });
      response.status(200).json(cotacoes);
    } catch (error) {
      response.status(400).send(error);
    }
  },
};
