const contratarJugador = new Promise((resolve, reject) => {
    const contratado = false;

    if (contratado) {
        resolve('El jugador se incorpora al equipo')
    } else {
        reject('El jugador y el equipo no llegaron a un acuerdo')
    }
})

contratarJugador
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))