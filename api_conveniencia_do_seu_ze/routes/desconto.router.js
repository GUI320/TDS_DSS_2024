const routes = require("express").Router();
const descontoController = require("../controller/desconto.controller");

// CRUD
routes.post("/", descontoController.cadastro);
routes.get("/", descontoController.consultar);
routes.get("/:id([0-9]+)", descontoController.buscaPorId);
routes.put("/", descontoController.atualizar);
routes.delete("/:id([0-9]+)", descontocontroller.cancelar);

module.exports = routes;