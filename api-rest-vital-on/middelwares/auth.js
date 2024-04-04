//Importar módulos
const jwt = require("jwt-simple");
const moment = require("moment");

//Importar clave secreta
const libjwt = require("../services/jwt");
const secret = libjwt.secret;
//Middleware de autenticación
exports.auth = (req, res, next) => {
  //Comprobar si me llega la cabecera de auth
  if (!req.headers.authoritation) {
    return res.status(403).send({
      status: "error",
      messGE: "La petición no tiene la cabecera de autenticación",
    });
  }
  //Limpiar el token

  let token = req.headers.authorization.replace(/['']+/g, "");
  //Decodificar token
  try {
    let payload = jwt.decode(token, secret);

    //Comprobar expiración de token
    if (payload.exp <= moment().unix()) {
      return res.status(401).send({
        status: "error",
        message: "Token expirado",
      });
    }

    //Agregar datos de usuario a request
  req.user = payload;
  
  } catch (error) {
    return res.status(404).send({
      status: "error",
      message: "Token inválido",
      error,
    });
  }
  

  //Pasar a ejecución de acción
  next();
};