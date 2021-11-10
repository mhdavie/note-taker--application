const util = require('util');
const fs = require('fs');
const { v1: uuidv1 } = require('uuid');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile)

class Storage {

    read() {
        return readFile('db/db.json', 'utf8')
    }

    write(note) {
        return writeFile('db/db.json', JSON.stringify(note))
        }

    async getNotes() {
        const notes = await this.read();
        let parsedNotes;
        try {
            parsedNotes = [].concat(JSON.parse(notes));
        } catch (err) {
            parsedNotes = [];
        }
        return parsedNotes;
    }
    async addNote(note) {
        const {title, text} = note;
        const newNote = {title, text, id: uuidv1() }
        // get all the notes
        const notes = await this.getNotes();
        const changedNotes = [...notes, newNote];
        await this.write(changedNotes);
        return newNote;
        
    } async removeNote(id){
        const notes = await this.getNotes();
        const filteredNote = notes.filter((note) => note.id !== id);
        return await this.write(filteredNote);
        
    }

}

module.exports = new Storage();