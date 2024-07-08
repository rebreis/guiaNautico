const {Router} = require ('express');
const usuarioRouter = require('./usuario.routes.js');
const rotaRouter = require('./rota.routes.js');
const sessionRouter = require('./session.routes.js');
const comentarioRouter = require('./comentario.routes.js');
const barqueiroRoutes = require('./barqueiro.routes.js');
const routes = Router();

routes.use("/session", sessionRouter)
routes.use('/usuario', usuarioRouter)
routes.use('/rota', rotaRouter)
routes.use("/comentario", comentarioRouter)
routes.use("/barqueiro", barqueiroRoutes)

module.exports=routes;
