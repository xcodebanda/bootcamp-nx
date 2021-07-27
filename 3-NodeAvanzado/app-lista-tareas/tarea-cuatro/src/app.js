const { mostrarMenu } = require('./helpers/mensajes')
const { pausa } = require('./helpers/pausa')

const main = async () => {
  let opcion = ''
  do {
    opcion = await mostrarMenu()
    console.log(opcion)

    if (opcion !== '0') {
      await pausa()
    }
  } while (opcion !== '0')
}

main()
