const { mostrarMenu, leerInput } = require('./helpers/inquirer')
const { newPausa } = require('./helpers/pausa')

// Models
const Tareas = require('./models/tareas')

const main = async () => {
  let opcion = ''
  const tareas = new Tareas()
  do {
    opcion = await mostrarMenu()
    
    switch (opcion) {
      case 1:
        const desc = await leerInput('Ingrese una descripción')
        tareas.crearTarea(desc)
        break
      case 2:
        tareas.listarTareas()
        break
      default:
        break
    }

    if (opcion !== 0) await newPausa()
  } while (opcion !== 0)
}

main()
