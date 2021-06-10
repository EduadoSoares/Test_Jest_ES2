const express = require("express");
const routes = express();
routes.use(express.json())


routes

    .post('/cadastro', (req, res) =>{
        const { nome, idade } = req.body;
        if (!nome || !idade){
            res.status(400).json({
                erro: "Error: Envie Nome e Idade",
            });
            return;
        }
        try{
            cadastro.push({
                id: cadastro.length+1,
                nome: nome,
                idade: idade
            })
            res.status(200).json({msg: "Cadastro Realizado"})
        }catch(error){
            res.status(400).json({erro: error.message});
        }
    })
    
    .get('/cadastro', (req, res) =>{
        res.status(200).json(cadastro)
    })

    .put('/cadastro/:id', (req, res) => {
        const id = req.params.id;
        const idade = req.body.idade;
        const pessoa = cadastro.find((i) => i.id == id);

        if (pessoa){
            pessoa.idade = idade;
            res.status(200).json({msg: "Cadastro atualizado"})
        }else{
            res.status(400).json({msg: "Pessoa não encontrada"})
        }
    })

    .delete('/cadastro/:id', (req, res) => {
         const id = req.params.id
         for (let i = 0; i < cadastro.length; i++){
            if(id == cadastro[i].id){
                cadastro.splice(id-1, 1)
                res.status(200).json({msg: "Pessoa removida"})
                return;
             }
         }
        res.status(400).json({msg: "Pessoa não encontrada"})
    })

module.exports = routes;

const cadastro = [{
    id: 1,
    nome: "Eduardo",
    idade: 23
}];
