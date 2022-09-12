const express = require("express");
const routes = express.Router();
const db = require('./server')

const MaterialController = require("./controllers/MaterialController");
const MaterialMiddleware = require("./middlewares/MaterialMiddleware");

routes.get("/materials", MaterialController.index);

routes.post("/materials", MaterialController.store);

routes.put("/materials/:id", MaterialMiddleware.getMaterial, MaterialController.update);

routes.delete("/materials/:id", MaterialMiddleware.getMaterial, MaterialController.delete);

routes.patch(
  "/materials/:id",
  MaterialMiddleware.getMaterial,
);

module.exports = routes;
