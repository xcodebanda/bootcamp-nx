const { mostrarMenu } = require('./helpers/mensajes');

const main = async () => {
  try {
    await mostrarMenu();
  } catch (error) {
    console.log(error.message);
  }
};

main();
