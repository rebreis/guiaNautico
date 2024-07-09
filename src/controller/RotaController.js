const knex = require('../database/knex');
const bcrypt = require('bcryptjs');

class RotaController {
    async createRota(req, res){
        const {horario, origem, destino, valorFixo, diasOperacao} = req.body;

        await knex('rota').insert({
            horario,
            origem,
            destino,
            valorFixo,
            diasOperacao
        })
        return res.status(201).json('Rota criado com sucesso!')
    }
    
    async listRota(req, res){
        const rota = await knex('rota');
        return res.status(200).json(rota)
    }

    async deleteRota(req, res){
        const {id_rota} = req.params;

        await knex('rota').where({id: id_rota}).delete()

        return res.status(200).json('Rota deletado com sucesso!')
    }
    async updateRota(req, res){
        const {horario, origem, destino} = req.body
        const {id_rota} = req.params;

        const rota = await knex('rota').where({id: id_rota})
        
        rota.horario = horario ?? rota.horario
        rota.origem = origem ?? rota.origem
        rota.destino = destino ?? rota.destino
        

        await knex('rota').where({id: id_rota}).update({origem, destino}), [rota.origem, rota.destino]

        res.status(200).json('Rota atualizado com sucesso')
    }
    
}
module.exports = RotaController;