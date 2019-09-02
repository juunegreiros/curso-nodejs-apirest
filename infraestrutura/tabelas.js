class Tabelas {
  init(conexao) {
    this.conexao = conexao

    this.criaAtendimentos()

    console.log('tabelas criadas com sucesso')
  }

  criaAtendimentos() {
    const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(100), pet varchar(100), servico varchar(100), data datetime, status varchar(100), observacoes text, PRIMARY KEY(id))'
    
    this.conexao.query(sql, erro => console.log(erro))
  }
}

module.exports = new Tabelas