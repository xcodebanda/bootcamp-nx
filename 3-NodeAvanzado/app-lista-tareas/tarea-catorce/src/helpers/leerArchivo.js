const fs = require('fs')

const leerArchivo = (direccion) => {
    let estaCreada = false
    if(!fs.existsSync(direccion)) return { estaCreada }
    const datos = fs.readFileSync(direccion, {encoding: 'utf-8'})
    estaCreada = true
    return { 
        estaCreada, 
        datos 
    }
}

module.exports = leerArchivo