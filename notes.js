const fs = require('fs')

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
    console.log('New note added!')
  } else {
    console.log("Can`t do it. Note title is already taken!")
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
  addNote: addNote
}