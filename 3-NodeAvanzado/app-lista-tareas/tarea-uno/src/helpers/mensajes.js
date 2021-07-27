const colors = require('colors');

const opciones = [
  { id: 1, titulo: 'Crear tarea' },
  { id: 2, titulo: 'Listar tareas' },
  { id: 3, titulo: 'Listar tareas completadas' },
  { id: 4, titulo: 'Listar tareas pendientes' },
  { id: 5, titulo: 'Completar tarea(s)' },
  { id: 6, titulo: 'Borrar tarea' },
  { id: 0, titulo: 'Salir' },
];

exports.mostrarMenu = () => new Promise((resolve) => {
  console.clear();
  console.log(colors.magenta('\n====================='));
  console.log(colors.bold('Seleccione una opción'));
  console.log(colors.magenta('=====================\n'));

  opciones.forEach((opt) => console.log(
    `${colors.dim(`${opt.id}.`)} ${opt.titulo}`,
  ));

  console.log('\n');
  resolve();
});
