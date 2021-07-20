const colors = require('colors')

const tablaMultiplicar = (base = 5, color = false) => {
    let tabla = ''
    for (let i = 1; i <= 10; i++) {

        let signoMultiplicar = 'x'
        let signoIgual = '='

        if (color) {
            signoMultiplicar = colors.cyan('x')
            signoIgual = colors.cyan('=')
        }   
        
        tabla += `${base} ${signoMultiplicar} ${i} ${signoIgual} ${base * i}\n`
    }
    return tabla
}

module.exports = tablaMultiplicar