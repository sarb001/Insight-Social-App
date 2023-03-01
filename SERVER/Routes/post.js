
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const requireLogin = require('../Middleware/RequireLogin');
const Post = require('../Models/Post');

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


module.exports = router;