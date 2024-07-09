const {Router} = require('express')
const ComentarioController = require('../controller/ComentarioController')
const ensureAuthenticaded = require('../middlewares/ensureAuthenticated')

const comentarioRoutes = Router()

const comentarioController = new ComentarioController

comentarioRoutes.get('/', comentarioController.listComentario)

comentarioRoutes.post('/:id_barqueiro', ensureAuthenticaded, comentarioController.createComentario)
comentarioRoutes.delete('/:id_comentario', ensureAuthenticaded, comentarioController.deleteComentario)

module.exports = comentarioRoutes