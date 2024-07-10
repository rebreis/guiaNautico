const {Router} = require('express')
const RotaController = require('../controller/RotaController')

const rotaRoutes = Router()

const rotaController = new RotaController

rotaRoutes.post('/', rotaController.createRota)
rotaRoutes.get('/', rotaController.listRota)
rotaRoutes.put('/:id_rota', rotaController.updateRota)
rotaRoutes.delete('/:id_rota', rotaController.deleteRota)

module.exports = rotaRoutes