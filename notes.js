const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes..'


const addNote = (title,body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    debugger
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New notes added'))
    }
    else {
        console.log(chalk.red.inverse('Note title taken!'))
    }


    // console.log(notes)
}

const readNote = (title) => {
    const notes = loadNotes()
    const read = notes.find((note) => note.title === title)
    // console.log(notes.)

    if (read) {
        // console.log(read)
        console.log(chalk.inverse.blue(read.title))
        console.log (read.body)

    } else {
        // console.log(read)
        console.log(chalk.red.inverse("No Notes found with title: "))
    }
}

const removeNote =  (title) => {
    const notes = loadNotes() 
    const noteToKeep = notes.filter((note) => note.title !== title)
    
    if (notes.length > noteToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(noteToKeep)  
    } else {
        console.log(notes.length)
        console.log(noteToKeep.length)
        console.log(chalk.red.inverse('No Notes Found!!!'))

    }
}

const listNotes = () => {
    console.log(chalk.inverse("Your notes: "))
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(element.title)
    });
}

const saveNotes = (notes) => {
    dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes =  () => {
    try {
        const dataBuffter = fs.readFileSync('notes.json')
        const dataJSON = dataBuffter.toString()
        return JSON.parse(dataJSON) 
    } catch(e) {
        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}