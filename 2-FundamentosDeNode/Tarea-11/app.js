const path = require('path');

// app modules
const tablaMultiplicar = require('./modulos/tablaMultiplicar');
const obtenerConsola = require('./modulos/yargs');
const crearArchivo = require('./modulos/crearArchivo');

const { base } = obtenerConsola;
const nombreArchivo = `tabla-${base}.txt`;
const direccion = path.join(__dirname, nombreArchivo);

const tabla = tablaMultiplicar(base);

crearArchivo(direccion, tabla)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
