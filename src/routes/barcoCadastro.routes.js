const {Router} = require('express')
const BarcoCadastroController = require('../controller/BarcoCadastroController')
const ensureAuthenticaded = require('../middlewares/ensureAuthenticated')
const checkIsAdmin = require('../middlewares/checkIsAdmin')

const barcoCadastroRoutes = Router()

const barcoCadastroController = new BarcoCadastroController

barcoCadastroRoutes.use(ensureAuthenticaded)

barcoCadastroRoutes.post('/', checkIsAdmin, barcoCadastroController.createBarco)
barcoCadastroRoutes.get('/', barcoCadastroController.listBarco)
barcoCadastroRoutes.put('/', barcoCadastroController.updateBarco)
barcoCadastroRoutes.delete('/', barcoCadastroController.deleteBarco)

module.exports = barcoCadastroRoutes