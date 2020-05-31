const express = require('express');
const router = express.Router();

const PostController= require('../controls/post');

router.post('/post', PostController.create_post);

router.get('/single/:postId', PostController.get_single_post);

router.post('/:postId', PostController.update_Post);

router.get('/posts', PostController.get_allPosts)

router.delete("/:postId" , PostController.delete_Post);

module.exports = router;