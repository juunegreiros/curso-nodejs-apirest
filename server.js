const customExpress = require('./config/custom-express')
const conexao = require('./infraestrutura/conexao')
const tabelas = require('./infraestrutura/tabelas')

const app = customExpress()

conexao.connect(erro => {
  if(erro) {
    console.log(erro)
  } else {
    console.log('conectou no banco')
    tabelas.init(conexao)
  }
})


app.listen(3000, () => console.log('Servidor rodando na porta 3000'))