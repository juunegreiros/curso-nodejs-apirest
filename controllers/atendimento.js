const Atendimento = require('../model/atendimentos')
const { check } = require('express-validator')

module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    console.log('Recebida requisicao atendimento')
    res.send('Get  Atendimento')
  })

  app.post('/atendimentos', [
    check('cliente').isLength({ min: 5 }).withMessage('nome do cliente deve possuir pelo menos 5 caracteres')
  ], (req, res) => {
    const atendimento = req.body
    console.log('Atendimento enviado')
    console.log(atendimento)
    Atendimento.adiciona(req, res, atendimento)
  })
}