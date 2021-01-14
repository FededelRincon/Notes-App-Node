const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

//Customize yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
	command: "add",
	describe: "Add a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
		body: {
			describe: "Note body",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	},
});

//Create remove command
yargs.command({
	command: "remove",
	describe: "Remove a note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.removeNote(argv.title);
	},
});

//Create list command
yargs.command({
	command: "list",
	describe: "List your notes",
	handler() {
		notes.listNotes();
	},
});

//Create read command
yargs.command({
	command: "read",
    describe: "read a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true, 
            type: "string"
        }
    },
	handler(argv) {
        notes.readNote(argv.title);
	},
});


yargs.parse();

//console.log(yargs.argv)

    //comandos con los que uso este programa
//agregar
//node app.js add --title="t3" --body="b3"

//remove
//node app.js remove --title="t3"

//abrir una
//node app.js read --title="t2"

//listar
//node app.js list
