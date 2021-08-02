const colors = require('colors')
const Tarea = require("./tarea")

class Tareas {
    constructor() {
        this._listado = {}
    }

    cargarTareas(tareas) {
        this._listado = tareas
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

    listarPendientesCompletadas(completadas=true) {
        const tareas = []
        let counter = 1
        Object.keys(this._listado).forEach((item, index) => {
            const { desc, completadoEn } = this._listado[item]
            const separador = colors.yellow('=>')
            const num = colors.rainbow(`${counter}:`) 
            const completado = completadoEn
                ? colors.green(`${completadoEn}`)
                : colors.red('Sin completar')
            if(completadas) {
                if(completadoEn) {
                    tareas.push(`\n${num} ${desc} ${separador} ${completado}`)
                    counter += 1
                }
            } else {
                if(!completadoEn) {
                    tareas.push(`\n${num} ${desc} ${separador} ${completado}`)
                    counter += 1
                }
            }
        })
        return tareas
    }

    get listaGuardarTareas() {
        return this._listado
    }
}

module.exports = Tareas
