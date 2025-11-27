const express = require('express');
const path = require('path');

const app = express(); // main object

// setup static folder to serve
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => { // simple route
// 	// res.send('Hello From Express Server');
// 	// res.send('<h3>H3 Header</h3>'); // Can send HTML
// 	// res.send({ 'Message': 'Can send JSON too!' }); // will stringify it on its own

// 	res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => { // adding an additional route
// 	// res.send('<h3>About Page</h3>');
// 	res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

app.listen(5000, () => console.log('Server is running on port 5000'));