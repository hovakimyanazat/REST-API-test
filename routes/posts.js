const express = require('express');
const router = express.Router();
const Post = require('../models/Post');



// Get back all the posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

// Submit a post
router.post('/' , async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch (err){
        res.json({message: err})
    }
});

// Specific post
router.get('/:postId' , async (req,res) =>{
    try{
    const specificPost = await Post.findById(req.params.postId);
    res.json(specificPost);
    } catch(err){
        res.json({message:err});
    }
})

// Delete a post 

router.delete('/:postId' , async (req,res) =>{
    try{
        const removePost =await Post.remove({_id: req.params.postId});
        res.json(removePost);
    }catch(err){
        res.json({message: err});
    }
})

// Update post 
router.patch('/:postId', async (req,res) =>{
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}}
        );
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router