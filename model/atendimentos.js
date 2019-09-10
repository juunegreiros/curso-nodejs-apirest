const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
  adiciona(res, item) {
    const { cliente, pet, servico, data, status, observacoes } = item
    const dataAgendamento = moment(data).format('YYYY-MM-DD hh:mm:ss')
    const dataCriacao = moment().format('YYYY-MM-DD hh:mm:ss')
    console.log(dataCriacao)
    const sql = `INSERT INTO Atendimentos(cliente, pet, servico, status, observacoes, data, dataCriacao) VALUES('${cliente}', '${pet}', '${servico}', '${status}', '${observacoes}', '${dataAgendamento}', '${dataCriacao}')`

    conexao.query(sql, (erro, resultados, campos) => {
      if(erro) {
        res.json(erro)
      } else {
        res.json(resultados)
        console.log('executou a query!')
      }
    })
  }
}

module.exports = new Atendimento