const colors = require('colors');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const tablaMultiplicar = require('./tablaMultiplicar');

const { argv } = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    demandOption: true,
    describe: 'base de la operacion',
    type: 'number',
  })
  .option('l', {
    alias: 'listar',
    demandOption: false,
    describe: 'lista los resultados de la operacion',
    type: 'boolean',
  })
  .check((args) => {
    const base = args.b;
    const listar = args.l;

    if (listar) {
      const tabla = tablaMultiplicar(base, true);
      const titulo = colors.bgCyan(`Tabla del ${base}\n`);
      console.log(titulo, tabla);
    }

    if (Number.isNaN(base)) throw new Error('Debe ser un numero');

    if (base < 1 || base > 20) {
      throw new Error('La base debe estar entre 1 y 20');
    }

    return true;
  });

module.exports = argv;
