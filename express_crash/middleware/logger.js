import colors from 'colors';

const logger = (req, res, next) => {
	// set and select the appropriate color
	const methodColors = {
		GET: 'green',
		POST: 'yellow',
		PUT: 'blue',
		DELETE: 'red',
	};
	const color = methodColors[req.method] || white;

	console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`[color]);
	next();
};

export default logger;