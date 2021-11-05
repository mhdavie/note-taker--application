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

// delete