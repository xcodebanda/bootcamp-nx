const inquirer = require('inquirer')
const colors = require('colors')

const opciones = [
  {
    type: 'list',
    name: 'seleccion',
    message: 'Que desea hacer?',
    choices: [
      { value: 1, name: `${colors.rainbow('1')}. Crear tarea` },
      { value: 2, name: `${colors.rainbow('2')}. Listar tareas` },
      { value: 3, name: `${colors.rainbow('3')}. Listar tareas completadas` },
      { value: 4, name: `${colors.rainbow('4')}. Listar tareas pendientes` },
      { value: 5, name: `${colors.rainbow('5')}. Completar tarea(s)` },
      { value: 6, name: `${colors.rainbow('6')}. Borrar tarea` },
      { value: 0, name: `${colors.rainbow('0')}. Salir` }
    ]
  }
]

exports.mostrarMenu = async () => {
  console.clear()
  console.log(colors.magenta('\n====================='))
  console.log(colors.bold('Seleccione una opción'))
  console.log(colors.magenta('=====================\n'))
  const { seleccion } = await inquirer.prompt(opciones)
  return seleccion
}

exports.leerInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor'
        }
        return true
      }
    }
  ]
  const { desc } = await inquirer.prompt(question)
  return desc
}

exports.listadoTareasBorrar = async (tareas) => {
  const choices = tareas.map((tarea, index) => ({
    value: tarea.id,
    name: `${colors.rainbow(`${index + 1}`)}. ${tarea.desc}`
  }))
  choices.unshift({
    value:'0',
    name: `${colors.rainbow('0')}. Cancelar`
  })
  const preguntas = [{
    type: 'list',
    name: 'id',
    message: 'Borrar',
    choices
  }]
  const { id } = await inquirer.prompt(preguntas)
  return id
}

exports.confirmar = async (message) => {
  const choices = [{
    type: 'confirm',
    name: 'confirm',
    message
  }]
  const { confirm } = await inquirer.prompt(choices)
  return confirm
}