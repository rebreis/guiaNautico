const {Router} = require('express')
const BarqueiroController = require('../controller/BarqueiroController')

const barqueiroRoutes = Router()

const barqueiroController = new BarqueiroController

barqueiroRoutes.post('/', barqueiroController.createBarqueiro)
barqueiroRoutes.get('/', barqueiroController.listBarqueiro)
barqueiroRoutes.put('/:id_barqueiro', barqueiroController.updateBarqueiro)
barqueiroRoutes.delete('/:id_barqueiro', barqueiroController.deleteBarqueiro)

module.exports = barqueiroRoutes