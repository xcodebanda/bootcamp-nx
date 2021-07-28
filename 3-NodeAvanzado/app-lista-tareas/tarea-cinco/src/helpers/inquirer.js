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
