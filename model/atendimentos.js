const moment = require('moment')
const conexao = require('../infraestrutura/conexao')
const { check, validationResult } = require('express-validator')

class Atendimento {
  adiciona(req, res, item) {
    const { cliente, pet, servico, data, status, observacoes } = item
    
    const dataAgendamento = moment(data).format('YYYY-MM-DD hh:mm:ss')
    const dataCriacao = moment().format('YYYY-MM-DD hh:mm:ss')
    
    const erros = validationResult(req)
    const existemErros = !erros.isEmpty
  
    if(existemErros) {
      res.status(400).json({ erros: erros.array()})
    }

    const sql = `INSERT INTO Atendimentos(cliente, pet, servico, status, observacoes, data, dataCriacao) VALUES('${cliente}', '${pet}', '${servico}', '${status}', '${observacoes}', '${dataAgendamento}', '${dataCriacao}')`

    conexao.query(sql, (erro, resultados, campos) => {
      if(erro) {
        res.status(400).json(erro)
      } else {
        console.log('executou a query!')
      }
    })
  }
}

module.exports = new Atendimento