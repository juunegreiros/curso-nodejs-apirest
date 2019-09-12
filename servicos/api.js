const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const app = new Koa();
const faker = require('faker')

app.use(bodyparser());

app.use(context => {
  const cpf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]
  const cpfString = cpf.map(() => faker.random.number(10))
  context.body = {
    nome: faker.name.findName(),
    dataDeNascimento: faker.date.past(),
    cpf: context.request.query.cpf || cpfString.join('')
  };
});

app.listen(8082);
console.log('API está rodando');
