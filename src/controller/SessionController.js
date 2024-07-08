require('../configs/auth')
const { sign } = require('jsonwebtoken')
const authConfig = require('../configs/auth')
const bcrypt = require('bcryptjs')
const AppError = require("../utils/AppError")
const knex = require('../database/knex');
 
 
class SessionController {
    async createSession(req, res) {
        const { email, senha } = req.body;
 
        const usuario = await knex('usuario').where({ email }).first()
 
        if (!usuario) {
            return res.status(400).json("Email e/ou senha inválido")
        }
 
        const senhaMatched = bcrypt.compare(senha, usuario.senha)
 
        if (!senhaMatched) {
            throw new AppError('Email e/ou senha incorreto!', 401)
        }
 
 
        const { secret, expiresIn } = authConfig.jwt
 
        const token = sign({}, secret, {
            subject: String(usuario.id),
            expiresIn,
        })
 
        return res.status(200).json({ usuario, token })

    }
}
module.exports = SessionController