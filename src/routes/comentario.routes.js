const {Router} = require('express')
const ComentarioController = require('../controller/ComentarioController')

const comentarioRoutes = Router()

const comentarioController = new ComentarioController

comentarioRoutes.post('/', comentarioController.createComentario)
comentarioRoutes.get('/', comentarioController.listComentario)
comentarioRoutes.delete('/', comentarioController.deleteComentario)

module.exports = comentarioRoutes