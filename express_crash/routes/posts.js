import express from 'express';
// const express = require('express');
const router = express.Router();

// Serve simple JSON Data
let posts = [
	{ id: 1, title: 'Post One' },
	{ id: 2, title: 'Post Two' },
	{ id: 3, title: 'Post Three' }
];

// Get all posts
router.get('/', (req, res) => {
	const limit = parseInt(req.query.limit);
	if (!isNaN(limit) && limit > 0) {
		return res.status(200).json(posts.slice(0, limit));
	}
	res.status(200).json(posts);
});

// Get a single post with req.params
router.get('/:id', (req, res) => {
	const id = parseInt(req.params.id);
	// res.status(200).json(posts.filter(post => post.id === id));
	const post = posts.find(eachPost => eachPost.id === id);

	if (!post) {
		return res.status(404).json({ message: `A post with the id: ${id} was not found.` });
	}
	res.status(200).json(post);
});

export default router;