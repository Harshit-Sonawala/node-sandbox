import express from 'express';
import { getPost, getPosts, createPost, updatePost, deletePost } from '../controllers/postController.js';
const router = express.Router();

// Get all posts
router.get('/', getPosts);

// Get a single post with req.params
router.get('/:id', getPost);

// Create new post
router.post('/', createPost);

// Update post
router.put('/:id', updatePost);

// Delete Post
router.delete('/:id', deletePost);

export default router;