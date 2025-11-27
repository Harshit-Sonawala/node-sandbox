// const { generateRandomNumber, celsiusToFahrenheit } = require('./utils');
// console.log(`Random Number: ${generateRandomNumber()}`);
// console.log(`Celsius to Fahrenheit: ${celsiusToFahrenheit(20)}`);

import getPosts, { getPostsLength } from "./postController.js";
console.log(getPosts());
console.log(`Posts Length: ${getPostsLength()}`);