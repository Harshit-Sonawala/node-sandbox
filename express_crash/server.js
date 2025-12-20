import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import notFoundErrorHandler from './middleware/notFoundErrorHandler.js';

// commonjs imports
// const express = require('express');
// const path = require('path');

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

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(logger);

// Routes
app.use('/api/posts', posts);

// Error Handler
app.use(notFoundErrorHandler);
// need to put this below routes otherwise we'll get a conflict
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));