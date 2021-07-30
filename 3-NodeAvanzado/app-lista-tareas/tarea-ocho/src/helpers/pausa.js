const readline = require('readline')

const inquirer = require('inquirer')
const colors = require('colors')

const txt = `Presione ${colors.magenta('ENTER')} para continuar`

exports.pausa = () => new Promise((resolve) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question(txt, () => {
    rl.close()
    resolve()
  })
})

exports.newPausa = async () => {
  await inquirer.prompt([
    { type: 'input', name: 'pausa', message: txt }
  ])
}
