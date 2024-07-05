const { verify } = require('jsonwebtoken')

const AppError = require('../utils/AppError')
const authConfig = require('../configs/auth')

function ensureAuthenticaded(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT Token não informado', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub: id_usuario } = verify(token, authConfig.jwt.secret)
    req.user = { id: Number(id_usuario) }
    return next()
  } catch {
    throw new AppError('JWT Token inválido', 401)
  }
}

module.exports = ensureAuthenticaded