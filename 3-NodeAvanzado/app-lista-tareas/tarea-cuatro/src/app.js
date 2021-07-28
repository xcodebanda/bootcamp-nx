const { mostrarMenu } = require('./helpers/inquirer')
const { newPausa } = require('./helpers/pausa')

const main = async () => {
  let opcion = ''
  do {
    opcion = await mostrarMenu()
    console.log(opcion)

    if (opcion !== 0) await newPausa()
  } while (opcion !== 0)
}

main()
