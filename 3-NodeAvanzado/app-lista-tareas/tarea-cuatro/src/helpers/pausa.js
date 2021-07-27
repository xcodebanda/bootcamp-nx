const readline = require('readline')
const colors = require('colors')

exports.pausa = () => new Promise((resolve) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const txt = `\nPresione ${colors.magenta('ENTER')} para continuar\n`
  rl.question(txt, () => {
    rl.close()
    resolve()
  })
})
