const Atendimento = require('../model/atendimentos')

module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    console.log('Recebida requisicao atendimento')
    Atendimento.lista(res)
  })

  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body
    console.log('Atendimento enviado')
    console.log(atendimento)
    Atendimento.adiciona(res, atendimento)
  })

  app.get('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id)

    Atendimento.busca(res, id)
  })

  app.patch('/atendimentos/:id', (req, res) => {
    const item = req.body
    const id = parseInt(req.params.id)

    Atendimento.altera(res, item, id)
  })
}