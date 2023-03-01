const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const Jsontoken = require('../Components/AuthRoute');
const jwt = require('jsonwebtoken');

const router = express.Router();
const requireLogin = require('../Middleware/RequireLogin');

router.get('/protected' ,requireLogin ,(req,res) => {
    res.send(" Hello in  MIddleawre User ")
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
        res.status(422).json(' Something Wrong Happens Signup Side  ')
     }
})

router.post('/login' , async(req,res) => {

    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(422).json({error : ' Please add Email or Password '})
        }
        User.findOne({email : email})
        .then(saveduser => 
            {
             if(!saveduser){
                return res.status(422).json({error : ' Invalid Email or Password '})
             }
             bcrypt.compare(password,saveduser.password)
             .then(domatch => {
                if(domatch){
                    const token  = jwt.sign({_id:saveduser._id} ,process.env.JWT_SECRET)
                    res.json({token})

                }else{
                    return res.status(422).json({error : ' Invalid Email or Password '})
                }
             })
             .catch(err => {
                console.log(err)
             })
        })


    }catch(err)
    {
        console.log(err);
        res.status(422).json(' Something Wrong Login Side  ')
    }

})


module.exports = router