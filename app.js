// // const fs = require('fs')
// // const name = require('./utils.js')
// // const add = require('./utils.js')
// const getNotes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
const { listNotes } = require('./notes.js')
const notes = require('./notes.js')

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
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
        // console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of note to be listed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
        // console.log('Reading a note')
    }
})

yargs.parse()


// // //fs.writeFileSync('notes.txt','My name is Sandesh');
// // fs.appendFileSync('notes.txt', '\nI am currently studying CS')

// // const name = 'Sandesh'
// // console.log(name)

// // const sum = add(1,2)
// // console.log(sum)

// const returnedNote = getNotes()
// console.log(returnedNote)

