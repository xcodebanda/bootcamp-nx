const { mostrarMenu } = require('./helpers/inquirer')
const Tarea = require('./helpers/models/tarea')
const Tareas = require('./helpers/models/tareas')
const { newPausa } = require('./helpers/pausa')

const main = async () => {
  const tarea = new Tarea(desc = 'Nueva tarea')
  const tareas = new Tareas()

  tareas._listado[tarea.id] = tarea
  console.log(tareas)

}

main()
