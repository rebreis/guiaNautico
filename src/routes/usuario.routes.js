const {Router} = require('express')
const UsuarioController = require('../controller/UsuarioController')
const ensureAuthenticaded = require('../middlewares/ensureAuthenticated')
const checkIsAdmin = require('../middlewares/checkIsAdmin')


const usuarioRoutes = Router()

const usuarioController = new UsuarioController()


usuarioRoutes.get('/', usuarioController.listUsuario);

usuarioRoutes.use(ensureAuthenticaded)

usuarioRoutes.post('/', checkIsAdmin, usuarioController.createUser);
usuarioRoutes.delete('/:id_usuario', checkIsAdmin, usuarioController.deleteUsers);
usuarioRoutes.put('/:id_usuario', checkIsAdmin, usuarioController.updateUsers);

module.exports = usuarioRoutes

