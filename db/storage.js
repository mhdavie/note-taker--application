const util
const fs
const uuidv1

class Storage {

    read() {

    }

    write() {

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


    addNote() {

    }

    removeNote(){
        
    }

}

module.exports = new Storage();