import express from 'express';
const router = express.Router();

// Serve simple JSON Data
let posts = [
	{ id: 1, title: 'Post One' },
	{ id: 2, title: 'Post Two' },
	{ id: 3, title: 'Post Three' }
];

// Get all posts
router.get('/', (req, res, next) => {
	const limit = parseInt(req.query.limit);
	if (!isNaN(limit) && limit > 0) {
		return res.status(200).json(posts.slice(0, limit));
	}
	res.status(200).json(posts);
});

// Get a single post with req.params
router.get('/:id', (req, res, next) => {
	const id = parseInt(req.params.id);
	// res.status(200).json(posts.filter(post => post.id === id));
	const post = posts.find(eachPost => eachPost.id === id);

	if (!post) {
		// return res.status(404).json({ message: `A post with the id: ${id} was not found.` });
		const error = new Error(`A post with the id: ${id} was not found.`);
		error.status = 404;
		return next(error);
	}
	res.status(200).json(post);
});

// Create new post
router.post('/', (req, res, next) => {
	const newPost = {
		id: posts.length + 1,
		title: req.body?.title
	};

	if (!newPost.title) {
		console.log(`Post missing title`);
		// return res.status(400).json({ message: `Error, please include a title.` });
		const error = new Error(`Error, please include a title.`);
		error.status = 400;
		return next(error);
	}

	posts.push(newPost);
	console.log(`newPost ${JSON.stringify(newPost)} successfully created.`);
	res.status(201).json(posts);
});

// Update post
router.put('/:id', (req, res, next) => {
	const urlId = parseInt(req.params.id);
	const post = posts.find((post) => post.id === urlId);

	if (!post) {
		console.log(`put request error: post ${urlId} was not found.`);
		const error = new Error(`A post with the id: ${urlId} was not found.`);
		error.status = 404;
		return next(error);
	}

	if (!req.body?.title) {
		const error = new Error(`Error, please include a title.`);
		error.status = 400;
		return next(error);
	}
	post.title = req.body.title;

	console.log(`Post ${urlId} was successfully updated to ${JSON.stringify(post)}.`);
	res.status(200).json(posts);
});

// Delete Post
router.delete('/:id', (req, res, next) => {
	const urlId = parseInt(req.params.id);
	const post = posts.find((post) => post.id === urlId);

	if (!post) {
		console.log(`delete request error: post ${urlId} was not found.`);
		const error = new Error(`A post with the id: ${urlId} was not found.`);
		error.status = 404;
		return next(error);
	}

	posts = posts.filter((post) => post.id !== urlId);
	console.log(`Post ${urlId} was successfully deleted.`);
	res.status(200).json(posts);
});

export default router;