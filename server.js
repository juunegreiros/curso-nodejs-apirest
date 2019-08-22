const express = require('./config/custom-express')
const app = express()

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))