const mongoose = require('mongoose');

const Post = require('../models/post');

exports.get_allPosts = (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error' + err))
}

exports.get_single_post =(req, res) => {
    Post.findById(req.params.postId)
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error' + err))
}

exports.create_post = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    const newPost = new Post({
        title,
        content
    });
    newPost.save()
        .then(() => res.json('Post created'))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.delete_Post = (req, res) => {
    Post.remove({ _id: req.params.postId})
        .then(posts => res.json('Post delete'))
        .catch(err => res.status(400).json('Error' + err))
}

exports.update_Post = (req, res) => {
    Post.findById(req.params.postId)
        .then(posts => {
                posts.title = req.body.title,
                posts.content = req.body.content

            posts.save()
                .then(posts => res.json('Post updated'))
                .catch(err => res.status(400).json('Error' + err))
        })
        .catch(err => res.status(400).json('Error:' + err))
}