
module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    console.log('Recebida requisicao atendimento')
    res.send('Get  Atendimento')
  })

  app.post('/atendimentos', (req, res) => {
    console.log('Atendimento enviado')
    res.send('Post atendimento')
  })
}