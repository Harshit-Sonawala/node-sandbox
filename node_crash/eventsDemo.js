import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
	console.log('Hello ' + name);
}

function goodbyeHandler(name) {
	console.log('Goodbye ' + name);
}

// Register Event Listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit Events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');

// Error Handling
myEmitter.on('error', (err) => {
	console.log('An error occurred:', err);
});
myEmitter.emit('error', new Error('Something went wrong')); // Deliberately causing an error event