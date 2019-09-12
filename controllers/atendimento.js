const Atendimento = require('../model/atendimentos')
const axios = require('axios')

module.exports = app => {
  app.get('/atendimentos', async (req, res) => {
    console.log('Recebida requisicao atendimento')

    const { data } = await axios.get('http://localhost:8082')
    Atendimento.lista(res, data)
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

  app.delete('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id)

    Atendimento.deleta(res, id)
  })
}