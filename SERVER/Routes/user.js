const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const requireLogin = require('../Middleware/RequireLogin');
const Post = require('../Models/Post');
const User = require('../Models/User');

router.get('/user/:id' ,   requireLogin ,(req,res) => {

    User.findOne({_id :req.params.id})      // find user first 
    .select("-password")
    .then(user => {
        Post.find({postedBy:req.params.id})     // find posts by  that user 
        .populate("postedBy","_id name")
        .exec((err,posts) => {
            if(err){
                return res.status(422).json({err})
            }
            res.json({user,posts})
        })
    }).catch(err => {
        return res.status(404).json({error: " User not Found "})
    })

})


module.exports = router;