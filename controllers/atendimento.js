
module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    console.log('Recebida requisicao atendimento')
    res.send('Get  Atendimento')
  })

  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body
    console.log('Atendimento enviado')
    console.log(atendimento)
    res.send('Post atendimento')
  })
}