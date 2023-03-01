
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const requireLogin = require('../Middleware/RequireLogin');
const Post = require('../Models/Post');

// Fetch all Posts 
router.get('/allpost' , (req,res) => {
    Post.find()
    .populate("postedBy" , "_id name")
    .then(posts => {
        res.json({posts})
    })
    .catch(err => {
        console.log(err)
    })
})

//  Logged user able to create Post 
router.post('/createpost' , requireLogin ,(req,res) => {
    const {title,body} = req.body;

    if(!title || !body){
        return res.status(422).json({error : ' Please Add All the Fields '})
    }

    const post = new Post({
        title,
        body,
        postedBy : req.user 
    }) 
    post.save().then(result => {
        res.json({post:result})
    })
    .catch(err => {
        console.log(err)
    })
})

// post for Specific  Logged in  User
router.get('/mypost' ,requireLogin  , (req,res) => {
        Post.find({postedBy : req.user._id})
         .populate("postedBy" ,"_id name")
         .then(mypost => {
            res.json({mypost})
         })
         .catch(err => {
            console.log(err)
         })
})


module.exports = router;