const knex = require('../database/knex');
const bcrypt = require('bcryptjs');

class ComentarioController {
    async createComentario(req, res){
        const {titulo, conteudo, dataCriacao} = req.body;

        await knex('comentario').insert({
            titulo,
            conteudo,
            dataCriacao
        })
        return res.status(201).json('Comentario criado com sucesso!')
    }
    
    async listComentario(req, res){
        const comentario = await knex('comentario');
        return res.status(200).json(comentario)
    }

    async deleteComentario(req, res){
        const {id_comentario} = req.params;

        await knex('comentario').where({id: id_comentario}).delete()

        return res.status(200).json('Comentario deletado com sucesso!')
    }
}
module.exports = ComentarioController;