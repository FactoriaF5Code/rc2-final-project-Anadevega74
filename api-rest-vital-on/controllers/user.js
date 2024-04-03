//Importar dependencias y módulos
const bcrypt = require("bcrypt");


//Importar modelos
const User = require("../models/user");

//Acciones de Prueba
const pruebaUser = (req, res) => {
    return res.status(200).send({
        message: "Mensaje enviado desde: controllers/user.js"
    });
}

// Registro de usuarios
const register = (req, res) => {
    // Recoger datos de la petición
    let params = req.body;
//Validación
if(!params.name || !params.email || !params.password || !params.nick){
    return res.status (400).json({
        status: "error",
        message: "Faltan datos por enviar",
    });
}  
    
}

//Control de usuarios duplicados
User.find({ 
    $or: [
    {email: params.email.toLowerCase() },
    {nick: params.nick.toLowerCase() }
 ]
}).exec(async(error, users) => {
    
    if(error) return res.status(500).json({status: "error", message: "Error en la consulta de usuarios"});

    if(users && users.length >= 1){
        return res.status(200).send({
            status: "success",
            message: "El usuario ya existe"
        });
    
    }
//Cifrar contraseña
let pwd = await bcrypt.hash(params.password, 10);
params.password = pwd;

//Crear objeto de usuario
let user_to_save = new User(params);

 //Guardar usuario en bbdd
user_to_save.save((error, userStored) => {
    if(error || !userStored) return res.status(500).send({status: "error", "message": "Error al guardar el usuario"});

//Devolver resultado
return res.status(200).json({
    status: "success",
    message: "Usuario registrado correctamente",
    user: userStored
  });
    
});

});

//Exportar acciones
module.exports = {
    pruebaUser, 
    register
}
