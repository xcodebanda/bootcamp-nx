const obtenerConsola = (nombre) => {
    const argumento = process.argv.find(arg => arg.includes(nombre))
    if (!argumento) {
        throw new Error('No se reconoce el comando')
    }
    return argumento.split('=')[1]
}

module.exports = obtenerConsola
