const Atendimento = require('../model/atendimentos')

module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    console.log('Recebida requisicao atendimento')
    res.send('Get  Atendimento')
  })

  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body
    console.log('Atendimento enviado')
    console.log(atendimento)
    Atendimento.adiciona(res, atendimento)
  })
}