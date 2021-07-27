const readline = require('readline');
const colors = require('colors');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

exports.pausa = () => new Promise((resolve) => {
  const txt = `\nPresione ${colors.magenta('ENTER')} para continuar\n`;
  rl.question(txt, () => {
    rl.close();
    resolve();
  });
});
