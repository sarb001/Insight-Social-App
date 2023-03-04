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


// follow the User 
router.put('/follow' ,  requireLogin ,(req,res) => {

    User.findByIdAndUpdate(req.body.followId , {        
        $push : {followers : req.user._id}              // put logged is in followers id 
    },{ new : true },(err,result) => {
        if(err){
            return res.status(422).json({error:err})
        }

        User.findByIdAndUpdate(req.user._id , {
            $push :  {following : req.body.followId}        // put follwer id in logged following  user
        },{ new : true}).select("-password")
        .then(result => {
             res.json(result)
        }).catch(err => {
            return res.status(422).json({error : err})
        })
    })
})


// unfollow the User
router.put('/unfollow' ,  requireLogin ,(req,res) => {

    User.findByIdAndUpdate(req.body.unfollowId , {        
        $pull : {followers : req.user._id}              
    },{
        new : true 
    } ,(err,result) => {
        if(err){
            return res.status(422).json({error:err})
        }

        User.findByIdAndUpdate(req.user._id , {
            $pull :  {following : req.body.unfollowId}      
        },{ new : true}).select("-password")
        .then(result => {
             res.json(result)
        }).catch(err => {
            return res.status(422).json({error : err})
        })
    })
})


module.exports = router;