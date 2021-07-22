const contratarJugador = new Promise((resolve, reject) => {
    const contratado = true;

    if (contratado) {
        resolve('El jugador se incorpora al equipo')
    } else {
        reject('El jugador y el equipo no llegaron a un acuerdo')
    }
})

const mostrarResultado = resultado => console.log(`Mensaje: ${resultado}`)

contratarJugador
    .then(resultado => mostrarResultado(resultado))
    .catch(error => console.log(error))