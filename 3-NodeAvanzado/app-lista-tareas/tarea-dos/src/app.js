const {mostrarMenu} = require('./helpers/mensajes');
const {pausa} = require('./helpers/pausa');

const main = async () => {
  mostrarMenu();
  await pausa();
};

main();
