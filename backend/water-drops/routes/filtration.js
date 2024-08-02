const express = require('express');
const router = express.Router();
const Filtration = require('../models/FiltrationModel');

    // router.get('/', function(req, res, next) {
    //     res.send("Traditional filtration techniques");
    //   });

    //route to get all filtrations
  router.get('/', async(req, res) => {
    try{
        const filtrations = await Filtration.find();
        res.status(200).json(filtrations);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
  });

    //route to get single filtration by Id
    router.get('/:id', async(req, res) => {
        try{
          const filtration = await Filtration.findById(req.params.id);
          if(filtration){
            res.status(200).json(filtration);
          }
          else{
            res.status(404).json({message: 'filtration not found'});
          }
        } catch (error){
          res.status(500).json({message: error.message});
        }
      });

      //Route to create a new filtration
  router.post('/',async(req, res) => {
    const {title, description, picture, url} = req.body;

    try{
      console.log("jgh")
      const newFiltration = new Filtration({title, description, picture, url});
      const savedFiltration = await newFiltration.save();
      res.status(201).json(savedFiltration);
    } catch(error) {
      res.status(500).json({message: error.message});
    }
  });

  //Route to update a filtration by Id
  router.put('/:id', async(req, res) => {
    try {
      const updatedFiltration = await Filtration.findByIdAndUpdate(req.params.id, req.body, {new: true});
      if(updatedFiltration){
        res.status(200).json(updatedFiltration);
      }else{
        res.status(404).json({message: 'Filtration not found'});
      }
   }catch(error){
      res.status(500).json({message: error.message});
    }
  });

  //Route to delete a filtration by Id
 router.delete('/:id', async(req, res) => {
    try {
      const deletedFiltration = await Filtration.findByIdAndDelete(req.params.id);
      if (deletedFiltration){
        res.status(200).json({message: 'Filtration deleted'});
      }else {
        res.status(404).json({message: 'Filtration not found'});
      }
    } catch(error){
      res.status(500).json({message: error.message});
    }
   });

  module.exports = router;