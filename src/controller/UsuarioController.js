const knex = require('../database/knex');
const bcrypt = require('bcryptjs');

class UsuarioController {
    async createUsuario(req, res){
       
            const {nome, email, telefone, senha} = req.body;

        const isAdm = false

        const hashedsenha = await bcrypt.hash(senha, 8)

        await knex('usuario').insert({
            nome,
            email,
            telefone,
            senha: hashedsenha,
            isAdm

        })
        return res.status(201).json('Usuário criado com sucesso!')
        
    }
    
    async listUsuario(req, res){
        const usuario = await knex('usuario');
        return res.status(200).json(usuario)
    }

    async deleteUsuario(req, res){
        const {id_usuario} = req.params;

        await knex('usuario').where({id: id_usuario}).delete()

        return res.status(200).json('Usuário deletado com sucesso!')
    }
    async updateUsuario(req, res){
        const {nome, email, telefone} = req.body
        const {id_usuario} = req.params;

        const usuario = await knex('usuario').where({id: id_usuario})
        
        usuario.nome = nome ?? usuario.nome
        usuario.email = email ?? usuario.email
        usuario.telefone = telefone ?? usuario.telefone
        

        await knex('usuario').where({id: id_usuario}).update({nome, email}), [usuario.nome, usuario.email]

        res.status(200).json('Usuário atualizado com sucesso')
    }
    
}
module.exports = UsuarioController;