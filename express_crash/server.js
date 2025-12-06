// commonjs imports
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express(); // main object

// Add a simple route
// app.get('/', (req, res) => {
// 	// res.send('Hello From Express Server');
// 	// res.send('<h3>H3 Header</h3>'); // Can send HTML
// 	// res.send({ 'Message': 'Can send JSON too!' }); // will stringify it on its own

// Send html files as the route
// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => { // adding an additional route
// 	res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// Setup static folder to serve
// app.use(express.static(path.join(__dirname, 'public')));


// Serve simple JSON Data
let posts = [
	{ id: 1, title: 'Post One' },
	{ id: 2, title: 'Post Two' },
	{ id: 3, title: 'Post Three' }
];

// Get all posts
app.get('/api/posts', (req, res) => {
	const limit = parseInt(req.query.limit);
	if (!isNaN(limit) && limit > 0) {
		res.status(200).json(posts.slice(0, limit));
	} else {
		res.status(200).json(posts);
	}
});

// Get a single post with req.params
app.get('/api/posts/:id', (req, res) => {
	const id = parseInt(req.params.id);
	// res.status(200).json(posts.filter(post => post.id === id));
	const post = posts.find(eachPost => eachPost.id === id);

	if (!post) {
		res.status(404).json({ message: `A post with the id: ${id} was not found.` });
	} else {
		res.status(200).json(post);
	}
});

app.listen(port, () => console.log(`Server is running on port ${port}`));