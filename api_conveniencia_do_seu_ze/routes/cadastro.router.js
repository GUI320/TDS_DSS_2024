const routes = require("express").Router();
const cadastroController = require("../controller/cadastro.controller");

// CRUD
routes.post("/", cadastroController.cadastro);
routes.get("/", cadastroController.consultar);
routes.get("/:id([0-9]+)", cadastroController.buscaPorId);
routes.put("/", cadastroController.atualizar);
routes.delete("/:id([0-9]+)", cadastroController.deletar);

module.exports = routes;