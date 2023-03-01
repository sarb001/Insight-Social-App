const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JsonToken = require('../Authorization/AuthRoute');


router.get('/' , (req,res) => {
    res.send('Hello in the Router....')
})

router.post('/signup' , async(req,res) => {

    try{
        const  { name ,email, password} = req.body;

        console.log(' signup data is  ',name,email,password);

        if(!email ||!password || !name)
        {
            return res.status(422).json({error : 'Please Fill all the Fields'})
        } 

        const finduser = await  User.findOne({email})

        if(finduser){
          return  res.status(422).json({error : ' User Already Present '})
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(req.body.password,salt);

            const user = await User.create({
                email : email,
                password:hashpass,
                name : name,
            })
            if(user)
            {
                res.status(201).json({
                    _id : user._id,
                    email : user.email,
                    password:user.password,
                    name :user.name,
                    token : JsonToken(user._id)     // token created 
                })
            }else
            {
                res.status(400).json({error : ' Not Able to  Create User '})
            }
    }
    catch(err)
    {
        console.log(err);
        res.status(422).json(' Something  Wrong Happens ')
    }
})


router.post('/login' , async(req,res) => {
   
    try{

        const {email , password} = req.body;
        if(!email || !password){
         res.status(400).json({error : 'Fill all the Fields'})
        }
        console.log(' email || pass is ',email);

          await User.findOne({email:email})
          .then(saveduser => {
              if(!saveduser){
                return res.status(422).json({error: "Invalid Email or Pass "})
              }
              bcrypt.compare(password,saveduser.password)
              .then(domatch => {
                  if(domatch){
                      const token = jwt.sign({_id : saveduser._id},process.env.JWT_SECRET)
                      const {_id,name,email} = saveduser;
                      res.status(200).json({token , user: {_id,name,email}})
                    }else{
                        return  res.status(422).json({error : ' Invalid Email or Password '})
                    }
                })
          })
          .catch(err => {
             console.log(err);
          })

    
        
    }catch(err){
           console.log('cred error is ',err);
            res.json({error : ' Wrong CredentialsRRRRRRRRRRR'})
    }
})



module.exports = router;