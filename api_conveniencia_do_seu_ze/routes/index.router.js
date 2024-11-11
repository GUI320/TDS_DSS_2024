const routes = require("express").Router();
const clienteRouter = require("./cliente.router");
const produtoRouter = require("./produto.router");
const cadastroRouter = require("./cadastro.router");
const descontoRouter = require("./desconto.router");

routes.use("/cliente", clienteRouter);
routes.use("/produto", produtoRouter);
routes.use("/cadastro", cadastroRouter);
routes.use("/desconto", descontoRouter);

module.exports = routes;