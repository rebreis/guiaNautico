const {Router} = require ('express');
const usuarioRouter = require('./usuario.routes.js');
const rotaRouter = require('./rota.routes.js')
const routes = Router();

routes.use('/usuario', usuarioRouter)
routes.use('/rota', rotaRouter)


module.exports=routes;
