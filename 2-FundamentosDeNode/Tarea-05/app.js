const path = require('path')

// third party modules
const colors = require('colors')

// app modules
const tablaMultiplicar = require('./modulos/tablaMultiplicar')
const obtenerConsola = require('./modulos/obtenerConsola')
const crearArchivo = require('./modulos/crearArchivo')

const base = obtenerConsola('--base')
const nombreArchivo = `tabla-${base}.txt`
const direccion = path.join(__dirname, nombreArchivo)

const tabla = tablaMultiplicar(base)
const titulo = colors.bgCyan(`Tabla del ${base}\n`)

console.log(titulo, tabla)

crearArchivo(direccion, tabla)
    .then(result => console.log(result))
    .catch(error => console.log(error))