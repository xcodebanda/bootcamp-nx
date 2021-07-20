const colors = require('colors')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const tablaMultiplicar = require('./tablaMultiplicar')

const argv = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        demandOption: true,
        describe: 'base de la operacion',
        type: 'number'
    })
    .option('l', {
        alias: 'listar',
        demandOption: false,
        describe: 'lista los resultados de la operacion',
        type: 'boolean'
    })
    .check((argv) => {
        const base = argv.b
        const listar = argv.l

        if (listar) {
            const tabla = tablaMultiplicar(base)
            const titulo = colors.bgCyan(`Tabla del ${base}\n`)
            console.log(titulo, tabla)
        }

        if (isNaN(base)) {
            throw new Error('Debe ser un numero')
        }

        if (base < 1 || base > 20) {
            throw new Error('La base debe estar entre 1 y 20')
        }

        return true
    })
    .argv

const obtenerConsola = (nombre) => {
    return argv[nombre]
}

module.exports = obtenerConsola
