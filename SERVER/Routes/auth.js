const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');


router.get('/routes' , (req,res) => {
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


router.get('/login' , (req,res) => {
    res.send('Login here ')
})




module.exports = router;