const router = require('express').Router();
const { response } = require('express');
const storage = require('../db/storage');

//get 
router.get('/notes', (req, res) => {
    storage
    .getNotes()
    .then((notes) => {
        return res.json(response)
    }).catch((err) => res.status(500).json(err))
})

//post

router.post("/notes",  (req, res) =>{
    storage
    .addNote()(req.body)
    .then((note) => {
    return res.json(response)
    }).catch(err => res.status(500).json(err))
});


// delete
router.delete("/notes/:id", (req, res) => {
    storage
        .removeNote()(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
});

module.exports = router;