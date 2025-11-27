// Simple API using Node.js http module
import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
	{ id: 1, name: 'John Doe' },
	{ id: 2, name: 'Jane Doe' },
	{ id: 3, name: 'Jim Doe' }
];

// Logger middleware
const logger = (req, res, next) => {
	console.log(`${new Date().toTimeString().slice(0, 8)} ${req.method} ${req.url}`);
	next();
};

// JSON Middleware
const jsonMiddleware = (req, res, next) => {
	res.setHeader('Content-Type', 'application/json');
	next();
};

// Route Handler for GET /api/users
const getUsersHandler = (req, res) => {
	res.write(JSON.stringify(users));
	res.end();
};

//Route Handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
	const id = req.url.split('/')[3]; // After the third /
	const user = users.find((eachUser) => eachUser.id === parseInt(id));
	if (user) {
		res.write(JSON.stringify(user));
	} else {
		res.statusCode = 404;
		res.write(JSON.stringify({ message: 'User not found' }));
	}
	res.end();
};

// Not Found Handler
const notFoundHandler = (req, res) => {
	res.statusCode = 404;
	res.write(JSON.stringify({ message: 'Route not found' }));
	res.end();
};

// Route Handler for POST /api/users
const createUserHandler = (req, res) => {
	let body = '';
	// Listen for data
	req.on('data', (chunk) => {
		body += chunk.toString();
	});
	req.on('end', () => {
		const newUser = JSON.parse(body);
		users.push(newUser);
		res.statusCode = 201;
		res.write(JSON.stringify(newUser));
		res.end();
	});
};

const server = createServer((req, res) => {
	logger(req, res, () => {
		jsonMiddleware(req, res, () => {
			if (req.url === '/api/users' && req.method === 'GET') {
				getUsersHandler(req, res);
			} else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
				getUserByIdHandler(req, res);
			} else if (req.url === '/api/users' && req.method === 'POST') {
				createUserHandler(req, res);
			} else {
				notFoundHandler(req, res);
			}
		});
	});
});

server.listen(PORT, () => {
	console.log(`${new Date().toTimeString().slice(0, 8)} Server running on port ${PORT}`);
});