const server = require('../src/routes');
const supertest = require('supertest');
const request = supertest(server);
let item;

beforeEach(() =>{
    pessoa = [{
        nome: "Larissa",
        idade: 23
    },
    {
        nome: "Alvaro",
        idade: 18
    }];
})

test('Lista', async () => {
    await request
        .get('/cadastro'); 
    expect(200)
});

test('Adiciona pessoa no cadastro', async () => {
    await request
        .post('/cadastro')
        .send(pessoa[0]);
    expect(200)
});

test('Erro no Deletar', async() => {
    await request
        .delete('/cadastro/5')
    .expect(400);
})

test('Erro no Cadastrar - Input errado', async() =>{
    await request
        .post('/cadastro')
        .send({
            game: "CS 1.6",
            ano: 2007
        })
        expect(400)
})

test('Deleta a pessoa do cadastro', async() => {
    await request
        .delete('/cadastro/1')
    .expect(200);
})

test('Erro ao alterar dado - Input correto', async () => {
    await request
      .put('/cadastro/5')
      .send({
        idade: 14
      })
      .expect(400);
});

test('Altera pessoa no cadastro', async () => {
    await request
      .put('/cadastro/2')
      .send({
          idade: 16
      })
      .expect(200);
});