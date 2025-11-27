// get the argument of current command-line inputs
console.log(process.argv);
console.log(process.argv[3]); // get a specific argument

// get environment variables from the system
console.log(process.env);
console.log(process.env.LOGNAME);

// pid
console.log(process.pid);

// current working directory
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage() object with detailed info
console.log(process.memoryUsage());

// uptime of this process - time between running the cmd and the script executing
console.log(process.uptime);

// run something on exit event
process.on('exit', (code) => {
	console.log(`About to exit with code: ${code}`);
});

// exit()
process.exit(0);
console.log('Hello after exit'); // never executes