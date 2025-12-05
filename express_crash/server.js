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

app.get('/api/posts', (req, res) => {
	res.json(posts);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));