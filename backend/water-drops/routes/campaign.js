const express = require('express');
const router = express.Router();

    router.get('/', function(req, res, next) {
        res.send("Campaign");
      });


      

  //route to get all campaigns
  router.get('/', async(req, res) => {
    try{
        const campaigns = await campaign.find();
        res.status(200).json(campaigns);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
  });

  //route to get campaign by Id
  router.get('/:id', async(req, res) => {
    try{
      const campaigns = await campaign.find();
      res.status(200).json(campaigns);
    } catch (error){
      res.status(500)
    }
  })

  module.exports = router;
