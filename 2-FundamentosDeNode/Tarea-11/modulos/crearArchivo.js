const fs = require('fs');

const crearArchivo = (direccion, contenido) => new Promise((resolve) => {
  fs.writeFileSync(direccion, contenido);
  resolve('Creado!');
});

module.exports = crearArchivo;
