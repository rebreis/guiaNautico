const {Router} = require ('express');
const usuarioRouter = require('./usuario.routes.js');
const rotaRouter = require('./rota.routes.js');
const sessionRouter = require('./session.routes.js');
const routes = Router();

routes.use("/session", sessionRouter)
routes.use('/usuario', usuarioRouter)
routes.use('/rota', rotaRouter)

module.exports=routes;
