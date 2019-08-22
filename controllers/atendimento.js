
module.exports = app => {
  app.get('/atendimento', (req, res) => {
    console.log('Recebida requisicao atendimento')
    res.send('Get  Atendimento')
  })
}