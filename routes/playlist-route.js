const Playlist = require('../models/playlist-model');
const express = require('express');
const router = express.Router();

const loadPlaylist = (req,res)=>{
  Playlist.findAll()
  .then((playlists)=>{
    res.send(playlists)
  })
};

const getPlaylistById = (req,res)=>{
  Playlist.findById(req.params.id)
    .then((data)=>{
      res.send(data)
    })
};


router.route('/')
.get(loadPlaylist)

router.route('/:id')
.get(getPlaylistById)

module.exports = router
