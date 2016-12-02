const Song = require('../models/song-model');
const express = require('express');
const router = express.Router();

var getAllSongs = (req,res)=>{
  Song.findAll()
  .then((songs)=>{
    res.send(songs)
  })
};

router.route('/')
.get(getAllSongs)


module.exports = router
