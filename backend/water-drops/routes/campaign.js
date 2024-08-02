const express = require('express');
const router = express.Router();
const Campaign = require('../models/CampaignModel');

    // router.get('/', function(req, res, next) {
    //     res.send("Campaign");
    //   });


      

  //route to get all campaigns
  router.get('/', async(req, res) => {
    try{
        const campaigns = await Campaign.find();
        res.status(200).json(campaigns);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
  });

  //route to get single campaign by Id
  router.get('/:id', async(req, res) => {
    try{
      const campaign = await Campaign.findById(req.params.id);
      if(campaign){
        res.status(200).json(campaign);
      }
      else{
        res.status(404).json({message: 'Campaign not found'});
      }
    } catch (error){
      res.status(500).json({message: error.message});
    }
  });

  //Route to create a new campaign
  router.post('/',async(req, res) => {
    const {title, description, picture} = req.body;

    try{
      console.log("jgh")
      const newCampaign = new Campaign({title, description, picture});
      const savedCampaign = await newCampaign.save();
      res.status(201).json(savedCampaign);
    } catch(error) {
      res.status(500).json({message: error.message});
    }
  });

  //Route to update a campaign by Id
  router.put('/:id', async(req, res) => {
    try {
      const updatedCampaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, {new: true});
      if(updatedCampaign){
        res.status(200).json(updatedCampaign);
      }else{
        res.status(404).json({message: 'Campaign not found'});
      }
   }catch(error){
      res.status(500).json({message: error.message});
    }
  });

 //Route to delete a campaign by Id
 router.delete('/:id', async(req, res) => {
  try {
    const deletedCampaign = await Campaign.findByIdAndDelete(req.params.id);
    if (deletedCampaign){
      res.status(200).json({message: 'Campaign deleted'});
    }else {
      res.status(404).json({message: 'Campaign not found'});
    }
  } catch(error){
    res.status(500).json({message: error.message});
  }
 });

  module.exports = router;
