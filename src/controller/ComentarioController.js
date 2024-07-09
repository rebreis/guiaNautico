const knex = require('../database/knex');
const bcrypt = require('bcryptjs');

class ComentarioController {
    async createComentario(req, res){
        const {titulo, conteudo} = req.body;
        const {id} = req.user
        const {id_barqueiro} = req.params

        await knex('comentario').insert({
            titulo,
            conteudo,
            id_usuario: id,
            id_barqueiro
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