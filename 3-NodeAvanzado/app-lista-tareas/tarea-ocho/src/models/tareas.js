const colors = require('colors')
const Tarea = require("./tarea")

class Tareas {
    constructor() {
        this._listado = {}
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
        console.log('Tarea creada!')
    }

    get listaMostrarTareas() {
        const tareas = []

        Object.keys(this._listado).forEach((item, index) => {
            const { desc, completadoEn } = this._listado[item]
            const separador = colors.yellow('=>')
            const num = colors.rainbow(`${index + 1}:`) 
            const completado = completadoEn
                ? colors.green(`${completadoEn}`)
                : colors.red('Sin completar')
            tareas.push(`\n${num} ${desc} ${separador} ${completado}`)
        })

        return tareas
    }

    get listaGuardarTareas() {
        const tareas = []

        Object.keys(this._listado).forEach((item) => {
            tareas.push(this._listado[item])
        })

        return tareas
    }
}

module.exports = Tareas
