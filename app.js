const chalk = require('chalk')
const getNotes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)


// console.log(chalk.bold.inverse.green('Success!'));

// console.log(process.argv[2]) //el process.argv da 3 cosas, el path + lugar donde se corre la app + lo que va despues del llamado: ie node app.js Andrew

const command = process.argv[2]

console.log(process.argv)

if(command === 'add') {
  console.log('Adding note!')
} else if (command === 'remove') {
  console.log('Removing note!') 
}