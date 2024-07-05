const knex = require('../database/knex');
const bcrypt = require('bcryptjs');

class AdmController {
    async createAdm(req, res){
        const {nome, senha, telefone, email, cpf} = req.body;

        const hashedsenha = await bcrypt.hash(senha, 8)

        await knex('adm').insert({
            nome,
            senha: hashedsenha,
            telefone,
            email,
            cpf
        })

        return res.status(201).json('Administrador criado com sucesso!')
    }

    async listAdm(req, res){
        const adm = await knex('adm');
        return res.status(200).json(adm)
    }

    async deleteAdm(req, res){
        const {id_adm} = req.params;

        await knex('adm').where({id: id_adm}).delete()

        return res.status(200).json('Administrador deletado com sucesso!')
    }

    async updateAdm(req, res){
        const {nome, telefone, email, cpf } = req.body
        const {id_adm} = req.params;

        const adm = await knex('adm').where({id: id_adm})
        
        adm.nome = nome ?? adm.nome
        adm.email = email ?? adm.email
        adm.telefone = telefone ?? adm.telefone
        adm.cpf = cpf ?? adm.cpf
        
        await knex('adm').where({id: id_adm}).update({nome, email}), [adm.nome, adm.email]

        res.status(200).json('Usuário atualizado com sucesso')
    }
}
module.exports = AdmController;