const express = require('express')

const app = express()

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

app.get('/atendimento', (req, res) => {
  console.log('Recebida requisicao atendimento')
  res.send('Get  Atendimento')
})