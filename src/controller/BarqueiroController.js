const knex = require('../database/knex');
const bcrypt = require('bcryptjs');

class BarqueiroController {
    async createBarqueiro(req, res){
        const {nome, senha, email, telefone, cpf, cir} = req.body;

        const hashedsenha = await bcrypt.hash(senha, 8)

        await knex('barqueiro').insert({
            nome,
            senha: hashedsenha,
            email,
            telefone,
            cpf,
            cir

        })
        return res.status(201).json('Barqueiro criado com sucesso!')
    }
    
    async listBarqueiro(req, res){
        const barqueiro = await knex('barqueiro');
        return res.status(200).json(barqueiro)
    }

    async deleteBarqueiro(req, res){
        const {id_barqueiro} = req.params;

        await knex('barqueiro').where({id: id_barqueiro}).delete()

        return res.status(200).json('Barqueiro deletado com sucesso!')
    }

    async updateBarqueiro(req, res){
        const {nome, email, telefone, cpf} = req.body
        const {id_barqueiro} = req.params;

        const barqueiro = await knex('barqueiro').where({id: id_barqueiro})
        
        barqueiro.nome = nome ?? barqueiro.nome
        barqueiro.email = email ?? barqueiro.email
        barqueiro.telefone = telefone ?? barqueiro.telefone
        barqueiro.cpf = cpf ?? barqueiro.cpf

        await knex('barqueiro').where({id: id_barqueiro}).update({nome, email}), [barqueiro.nome, barqueiro.email]

        res.status(200).json('Barqueiro atualizado com sucesso')
    }
}
module.exports = BarqueiroController;