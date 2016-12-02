const Artist =require('../models/artist-model');
const express = require('express');
const router = express.Router();

const getAllArtists = (req,res)=>{
  Artist.findAll()
  .then((data)=>{
    res.send(data)
  })
};

router.route('/')
.get(getAllArtists)

module.exports = router
