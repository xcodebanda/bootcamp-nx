const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const obtenerConsola = (nombre) => {
    const valor = argv[nombre]
    if (!valor) {
        throw new Error('No se reconoce el comando')
    }
    return valor
}

module.exports = obtenerConsola
