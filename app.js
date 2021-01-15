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

///////////////PARA DEBUGEAR///////////////////////////////////
//Usar Debugger
	//1. se agrega la linea "debugger". (el inspect, se va a detener cuando llegue a esto)
	//2. se le agrega la palabra "inspect" al comando.
	//3. se corre el comando de abajo
		//node inspect app.js add --title="Courses" --body="courses"
	//4. en chrome abrimos: chrome://inspect
	//5. en config pongo config y agrego
		//127.0.0.1:9229   //9229 es el numero que me sale en el localhost justo arriba(osea q me quedan 2, el localhost:9229 y el 127.0.0.1:9229)
	
	//6."debuggear""
		//a. siguiendo con el 1.,  cuando pongo "play" llega hasta la linea de "debugger" y se frena (no importa q sea en otro archivo)
		//b. cuando se frena, en la parte de consola(se abre con esc), puedo ver el valor de cada variable. (tambien se puede ver en Scope)
		//c. y pongo "play" y sigue hasta el final de todo

	//7. si quisiera modificar y volver a ver, en la consola donde se hizo el "inspect" (q va a estar con el debugger abierto) se pone "restart"
	//7b. para salir ctrl c