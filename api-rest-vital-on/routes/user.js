const express = require("express");
const router = express.Router();
const UserController = require("../controllers.user");

//Definir rutas
router.get("/prueba-user", UserController.pruebaUser);
router.get("/register", UserController.register);
//Exportar router
module.exports = router;