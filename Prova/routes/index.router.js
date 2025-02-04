const express = require("express");
const autorRouter = require("./autor.route")
const livroRouter = require("./livro.route")

const routes = express.Router();

routes.use("/autor", autorRouter);
routes.use("/livro", livroRouter);

module.exports = routes;