const {Router} = require('express')
const BarqueiroController = require('../controller/BarqueiroController')

const barqueiroRoutes = Router()

const barqueiroController = new BarqueiroController

barqueiroRoutes.post('/', barqueiroController.createBarqueiro)
barqueiroRoutes.get('/', barqueiroController.listBarqueiro)
barqueiroRoutes.put('/', barqueiroController.updateBarqueiro)
barqueiroRoutes.delete('/', barqueiroController.deleteBarqueiro)

module.exports = barqueiroRoutes