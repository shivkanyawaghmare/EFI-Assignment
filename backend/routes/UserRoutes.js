const express = require('express');
const UserModel = require('../models/UserModels')
const router = express.Router()

router.post('/register',async(req,res)=>{
    try{
        const existingUser = await UserModel.findOne({email: req.body.email})
        if(existingUser) {
            return res.status(400).send("User already exists")
        }
        const newUser = new UserModel(req.body)
        await newUser.save()
        res.status(201).send("User registered successfully")
    }
    catch(error){
        console.error("Error registering user:", error);
        res.status(500).send('Server Error')
    }
});

router.post('/login', async (req, res) => {
    try {
      const user = await UserModel.findOne({
        email: req.body.email,
        password: req.body.password,
      })
      if (user) {
        const usertobj = user.toObject()
        delete usertobj.password
        res.send(usertobj)
      }else {
        // If no user is found with the provided credentials, send a 404 response
        res.status(404).send("User not found");
      }
    }
      catch(error){
        console.log(error)
        res.status(500).send("error")
      }
    })
  

module.exports = router;