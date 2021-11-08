const util = require('util');
const fs = require('fs');
const uuidv1 = require('uuid/v1')
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile)

class Storage {

    read() {
        return readFile('db/db.json', 'utf8')
    }

    write(note) {
        return writeFile('db/db.json', JSON.stringify(note))
        }

    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            }catch(err) {
                parsedNotes=[];            }
return parsedNotes
        })
    }
    addNote(note) {
        const {title, text} = note;
        const newNote = {title, text, id: uuidv1() }
        // get all the notes
        return this.getNotes()
        //add the new notes
        .then((notes) => [...notes, newNote])
        // write all the updated notes
        .then((changedNotes) => this.write(changedNotes))
        // returning new note
        .then(() => newNote)
    } removeNote(id){
        return this.getNotes()
        .then((notes) => notes.filter((note) => note.id !== id))
        .then((filteredNote) => this.write(filteredNote));
        
    }

}

module.exports = new Storage();