const fs = require('fs')

const guardarArchivo = (direccion, datos) => {
    fs.writeFileSync(direccion, JSON.stringify(datos))
} 

module.exports = guardarArchivo