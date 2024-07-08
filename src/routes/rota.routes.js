const {Router} = require('express')
const RotaController = require('../controller/RotaController')

const rotaRoutes = Router()

const rotaController = new RotaController

rotaRoutes.post('/', rotaController.createRota)
rotaRoutes.get('/', rotaController.listRota)
rotaRoutes.put('/', rotaController.updateRota)
rotaRoutes.delete('/', rotaController.deleteRota)

module.exports = rotaRoutes