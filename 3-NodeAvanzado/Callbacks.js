const frameworks = []

const nuevoFramework = (framework, callback) => {
    setTimeout(() => {
        frameworks.push(framework)
        callback()
    }, 2000);
}

const mostrarFrameworks = () => {
    setTimeout(() => {
        frameworks.forEach(framework => console.log(framework));
    }, 1000);
    console.log('\n')
}

const cargarFrameworks = () => {
    setTimeout(() => {
        nuevoFramework('Angular', mostrarFrameworks)
        setTimeout(() => {
            nuevoFramework('Laravel', mostrarFrameworks)
            setTimeout(() => {
                nuevoFramework('Django', mostrarFrameworks)
                setTimeout(() => {
                    nuevoFramework('Spring', mostrarFrameworks)
                    setTimeout(() => {
                        nuevoFramework('Fiber', mostrarFrameworks)
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}

// Callback hell
cargarFrameworks()



