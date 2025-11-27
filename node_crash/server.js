import http from 'http';
import url from 'url';
import path from 'path';
import fs from 'fs/promises';
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
	// res.write('Hello World'); // send text response to client
	// res.setHeader('Content-Type', 'text/html');
	// res.statusCode = 404;
	// res.end(JSON.stringify({ message: 'Server Error' }))

	// console.log(req.url);
	// console.log(req.method);
	// res.writeHead(200, { 'Content-Type': 'text/html' });
	// res.end('<h1>Hello Harshit</h1>');

	try {
		if (req.method === 'GET') {
			let filePath;
			if (req.url === '/') {
				filePath = path.join(__dirname, 'public', 'index.html');
			} else if (req.url === '/about') {
				filePath = path.join(__dirname, 'public', 'about.html');
			} else {
				throw new Error('Error 404: Not Found');
			}
			const data = await fs.readFile(filePath);
			res.setHeader('Content-Type', 'text/html');
			res.write(data);
			res.end();
		} else {
			throw new Error('Method not allowed');
		}
	} catch (error) {
		res.writeHead(500, { 'Content-Type': 'text/plain' });
		res.end('Server Error');
	}
});

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});