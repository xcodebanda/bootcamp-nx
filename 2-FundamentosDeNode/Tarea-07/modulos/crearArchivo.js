const fs = require('fs')

const crearArchivo = (direccion, contenido) => {
    return new Promise((resolve, _) => {
        fs.writeFileSync(direccion, contenido)
        resolve('Creado!')
    })
}

module.exports = crearArchivo