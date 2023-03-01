const express = require('express');
const mongoose = require('mongoose');
const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const Jsontoken = require('../Components/AuthRoute');

const router = express.Router();


router.get('/' , (req,res) => {
    res.send(" Hello in  MIddleawre  ")
})

router.post('/signup' , async(req,res) => {
     try
     {
        
        const { name ,email , password } = req.body;

        if(!email || !password || !name){
            return res.status(422).json({ error : 'Please Fill all the Fields '})
        }
        const finduser = await  User.findOne({email})

        if(finduser){
            return res.status(422).json({error : ' User already Present '})
        }

        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(req.body.password,salt);

         const user = await User.create({
                email  :email,
                password : hashpass,
                name : name,
         }) 
         if(user){
            res.status(201).json({
                _id: user._id,
                email : user.email,
                password : user.password,
                name : user.name,
                token : Jsontoken(user._id)
            })
         }else{
            res.status(400).json({error : ' Not Able to Create User '});
         }


     }catch(err)
     {
        console.log(err);
        res.status(422).json(' Something Wrong Happens ')
     }
})

module.exports = router