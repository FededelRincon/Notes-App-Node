const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
	return "Your notes...";
};

const addNote = (title, body) => {
	const notes = loadNotes(); //busca la info de notes.json o usa un []
    const duplicateNote = notes.find((note) => note.title === title)

	if (!duplicateNote) {
		//usa este duplicate para meterle las cosas o dar el msj de error de duplicado
		notes.push({
			//mete esta info parseada adentro
			title: title,
			body: body,
		});
		saveNotes(notes); //guarda y/o sobreescribe en el notes.json
		console.log(chalk.green.inverse(" New note added! "));
	} else {
		console.log(
			chalk.red.inverse(" Can`t do it. Note title is already taken! ")
		);
	}
};

const removeNote = (title) => {
	const notes = loadNotes();
	const notesToKeep = notes.filter((note) => note.title !== title //si no son iguales, los guardo
	);

	if (notes.length > notesToKeep.length) {
		console.log(chalk.green.inverse(" Note removed! "));
		saveNotes(notesToKeep);
	} else {
		console.log(chalk.red.inverse(" Note not found! "));
	}
};

const listNotes = () => {
    const notes = loadNotes();
    
    console.log(chalk.inverse.white(" Your notes are: "))
    
    notes.forEach((note) => {
        console.log(' * ' + note.title)
    })
};

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJson = dataBuffer.toString();
		return JSON.parse(dataJson);
	} catch (e) {
		return [];
	}
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};
