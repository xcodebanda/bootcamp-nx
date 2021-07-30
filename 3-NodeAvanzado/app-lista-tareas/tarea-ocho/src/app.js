const colors = require('colors')

const { mostrarMenu, leerInput } = require('./helpers/inquirer')
const guardarArchivo = require('./helpers/guardarArchivo')
const { newPausa } = require('./helpers/pausa')
const { DB_DIR } = require('../constants')

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
        const lista = tareas.listaMostrarTareas
        if (lista.length > 0) {
          console.log(...lista)
        } else {
          console.log(colors.red('No hay tareas cargadas aún...'))
        }
        console.log('\n')
        break
      default:
        break
    }

    guardarArchivo(DB_DIR, tareas.listaGuardarTareas)
    if (opcion !== 0) await newPausa()
  } while (opcion !== 0)
}

main()
