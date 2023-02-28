const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const Post = mongoose.model('Post')

const { ProtectedRoute } = require('../Middleware/ProtectedRoute');


router.post('/createpost' , async(req,res) => {

        try{
            const {title,body,photo} = req.body
            if(!title || !body || !photo){
                return res.status(422).json({error :' Please Add all the Fields '})
            }
        
            const post = await  Post.create({
                title: title,
                body: body,
                photo : photo,
                postedBy: req.user
            })
    
            if(post){
                res.status(201).json({
                    _id : post._id,
                    title: title,
                    body: body,
                    photo : photo,
                    postedBy: req.user
                })
            }else
            {
                res.status(400).json({error : ' Not able to  Create Post  '})
            }
        
        }catch(error) {
            res.json({error : ' Wrong Credentials '})
            }
})


router.get('/allpost' , async(req,res) => {

    try{
        await Post.find().populate("postedBy","_id name")
        .then(posts => res.json({posts}))

    }catch(err)
    {
        console.log('error is',err);
        res.json({error : ' Not able to Fetch All Posts '})
    }

})

module.exports = router;

