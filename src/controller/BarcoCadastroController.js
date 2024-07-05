const knex = require('../database/knex');
const bcrypt = require('bcryptjs');

class BarcoCadastroController {
    async createUser(req, res){
        const {capacidade, cor, nomeBarco, registroBarco} = req.body;

        await knex('barco').insert({
            nome,
            email,
            telefone,
            senha: hashedsenha,

        })
        return res.status(201).json('Barco cadastrado com sucesso!')
    }

    async listBarco(req, res){
        const barco = await knex('barco');
        return res.status(200).json(barco)
    }

    async deleteBarco(req, res){
        const {id_barco} = req.params;

        await knex('barco').where({id: id_barco}).delete()

        return res.status(200).json('Barco deletado com sucesso!')
    }

    async updateBarco(req, res){
        const {capacidade, cor, nomeBarco, registroBarco} = req.body
        const {id_barco} = req.params;

        const barco = await knex('users').where({id: id_barco})
        
        barco.capacidade = capacidade ?? barco.capacidade
        barco.cor = cor ?? barco.cor
        barco.nomeBarco = nomeBarco ?? barco.nomeBarco
        barco.registroBarco = registroBarco ?? barco.registroBarco
        

        await knex('barco').where({id: id_barco}).update({nomeBarco, registroBarco}), [barco.nomeBarco, barco.registroBarco]

        res.status(200).json('Barco atualizado com sucesso')
    }
}
module.exports = BarcoCadastroController;