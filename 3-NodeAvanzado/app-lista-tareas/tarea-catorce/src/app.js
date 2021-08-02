const colors = require('colors')

const { 
  leerInput, 
  confirmar,
  mostrarMenu, 
  listadoTareasBorrar,
  mostrarListadoChecklist 
} = require('./helpers/inquirer')
const guardarArchivo = require('./helpers/guardarArchivo')
const { newPausa } = require('./helpers/pausa')
const { DB_DIR } = require('../constants')

// Models
const Tareas = require('./models/tareas')
const leerArchivo = require('./helpers/leerArchivo')

const main = async () => {
  let opcion = ''
  
  const tareas = new Tareas()
  const database = leerArchivo(DB_DIR)

  if(database.estaCreada) {
    tareas.cargarTareas(JSON.parse(database.datos))
  }

  do {
    let lista;
    opcion = await mostrarMenu()
    switch (opcion) {
      case 1:
        const desc = await leerInput('Ingrese una descripción')
        tareas.crearTarea(desc)
        break
      case 2:
        lista = tareas.listaMostrarTareas
        if (lista.length > 0) {
          console.log(...lista)
        } else {
          console.log(colors.red('No hay tareas cargadas aún...'))
        }
        console.log('\n')
        break
      case 3:
        lista = tareas.listarPendientesCompletadas()
        console.log(...lista)
        break
      case 4:
        lista = tareas.listarPendientesCompletadas(completadas=false)
        console.log(...lista)
        break
      case 5:
        const ids = await mostrarListadoChecklist(tareas.listadoArr)
        tareas.toggleCompletada(ids)
        break
      case 6:
        const id = await listadoTareasBorrar(tareas.listadoArr)
        if (id !== 0) {
          const confirm = await confirmar('¿Estás seguro?')
          if(confirm) {
            tareas.borrarTareaPorID(id)
            console.log('Tarea eliminada...')
          }
        }
        break
      default:
        break
    }

    guardarArchivo(DB_DIR, tareas.listaGuardarTareas)
    if (opcion !== 0) await newPausa()
  } while (opcion !== 0)
}

main()
