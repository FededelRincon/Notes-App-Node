const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
  return 'Your notes...'
}

const addNote = function (title, body) {
  const notes = loadNotes() //busca la info de notes.json o usa un []
  const duplicateNotes = notes.filter(function (note) { //si se repite lo metes en el duplicateNotes, sino queda en 0
    return note.title === title
  })

  if (duplicateNotes.length === 0) { //usa este duplicate para meterle las cosas o dar el msj de error de duplicado
    notes.push({   //mete esta info parseada adentro
      title: title,
      body: body
    })
    saveNotes(notes) //guarda y/o sobreescribe en el notes.json
    console.log(chalk.green.inverse(' New note added! '))
  } else {
    console.log(chalk.red.inverse(" Can`t do it. Note title is already taken! "))
  }
}

const removeNote = function (title) {
  const notes = loadNotes()
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title //si no son iguales, los guardo
  })
  
  if (notes.length > notesToKeep.length){
    console.log(chalk.green.inverse(' Note removed! '))
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.inverse(' No note found! '))
  }
  
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
  } catch (e) {
    return []
  }
}


module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}