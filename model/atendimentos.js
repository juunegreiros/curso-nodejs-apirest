const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
  adiciona(res, item) {
    const { cliente, pet, servico, data, status, observacoes } = item
    
    const dataAgendamento = moment(data).format('YYYY-MM-DD hh:mm:ss')
    const dataCriacao = moment().format('YYYY-MM-DD hh:mm:ss')
    
    const dataAgendamentoEhValida = moment(dataAgendamento).isSameOrAfter(dataCriacao)
    const clienteEhValido = cliente.length >= 5

    const validacao = [
      { 
        campo: 'dataAgendamento',
        valido: dataAgendamentoEhValida,
        mensagem: 'data deve ser igual ou maior que a data atual'
      },
      { 
        campo: 'cliente',
        valido: clienteEhValido,
        mensagem: 'cliente deve conter pelo menos 5 caracteres'
      }
    ]
    
    const erros = validacao.filter(campo => !campo.valido)
    
    console.log(erros)
    const existemErros = erros.length
  
    if(existemErros) {
      res.status(400).json({ erros })
    } else {
      const sql = `INSERT INTO Atendimentos(cliente, pet, servico, status, observacoes, data, dataCriacao) VALUES('${cliente}', '${pet}', '${servico}', '${status}', '${observacoes}', '${dataAgendamento}', '${dataCriacao}')`

      conexao.query(sql, (erro, resultados, campos) => {
        if(erro) {
          res.status(400).json(erro)
        } else {
          res.status(201).json(resultados)
        }
      })

    }
  }

  lista(res) {
    const sql = 'select * from Atendimentos'

    conexao.query(sql, (erro, resultados, campos) => {
      if(erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }

  busca(res, id) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

    conexao.query(sql, (erro, resultados, campos) => {
      if(erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }
  
  altera(res, item, id) {
    const sql = `update Atendimentos set ? where id=${id}`
    
    conexao.query(sql, item, (erro, resultados, campos) => {
      if(erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }
}

module.exports = new Atendimento