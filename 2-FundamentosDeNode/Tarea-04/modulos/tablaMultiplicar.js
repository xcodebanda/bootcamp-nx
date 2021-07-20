const tablaMultiplicar = (base = 5) => {
    let tabla = ''
    for (let i = 1; i <= 10; i++) {
        tabla += `${base} x ${i} = ${base * i}\n`
    }
    return tabla
}

module.exports = tablaMultiplicar