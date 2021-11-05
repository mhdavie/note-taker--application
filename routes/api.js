const router = require('express').Router();
const storage = require('../db/storage');

//get 
router.get('/notes', (req, res) => {
    storage
    .getNotes()
    .then((notes) => {
        return res.json(notes)
    }).catch((err) => res.status(500).json(err))
})

//post

router.post("/notes",  (req, res) =>{
    storage
    .addNote()(req.body)
    .then((notes) => {
        return res.json(notes)

    }).catch(err => res.status(500).json(err))
});


// delete
router.delete("/notes/:title", (req, res) => {
    storage
        .removeNote()(req.params.title)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
});