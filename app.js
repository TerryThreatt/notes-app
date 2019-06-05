const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

// Customize yargs version 
yargs.version('1.1.0')

// Create add command 
yargs.command({ 
    command: 'add', 
    describe: 'Add a new note', 
    builder: { 
        title: { 
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        }, 
        body: { 
            describe: 'This is the description', 
            demandOption: true, 
            type: 'string'
        }
    },
    handler: function (argv) { 
        notes.addNote(argv.title, argv.body)
    }
})

// Create a remove command 
yargs.command({ 
    command: 'remove', 
    describe: 'Removing a note',
    handler: function () { 
        console.log('Removing the note')
    }
})

// Read a command 
yargs.command({ 
    command: 'read', 
    describe: 'Reading a note',
    handler: function () {
        console.log("Reading the note")
    }
})

// Listing a command 
yargs.command({
    command: 'list', 
    describe: 'List your notes', 
    handler: function () { 
        console.log('Listing the notes')
    }
})
// add, remove, read, list 

console.log(yargs.argv)


