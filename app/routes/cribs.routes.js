module.exports = app => {
    const cribs = require("../controllers/cribs.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Cribs
    router.post("/", cribs.create);
  
    // Retrieve all Cribs
    router.get("/", cribs.findAll);
    
    // Retrieve a single Cribs with id
    router.get("/:id", cribs.findOne);
  
    // Update a Cribs with id
    router.put("/:id", cribs.update);
  
    // Delete a Cribs with id
    router.delete("/:id", cribs.delete);
  
    // Delete all the cribs
    // router.delete("/", cribs.deleteAll);
  
    app.use('/api/cribs', router);
  };