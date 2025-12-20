const notFoundErrorHandler = (req, res, next) => {
	const error = new Error(`URL Not Found`);
	error.status = 404;
	next(error);
};

export default notFoundErrorHandler;