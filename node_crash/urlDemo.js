import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL Object - String to Object
const urlObj = new URL(urlString);
console.log(urlObj);

// format() - URL to String
console.log(url.format(urlObj));

// import.meta.url - current file URL
console.log(import.meta.url); // file:///C:/Dev/backend_projects/node_crash/urlDemo.js

// fileURLToPath() - file URL to standardized path format
console.log(url.fileURLToPath(import.meta.url)); // C:\Dev\backend_projects\node_crash\urlDemo.js

console.log('\n');
console.log(urlObj.search); // ?q=hello+world
// Get the search params as an object
const params = new URLSearchParams(urlObj.search);
console.log(params); // URLSearchParams { 'q' => 'hello world' }
console.log(params.get('q')); // hello world

// Add a param to URLSearchParams
params.append('limit', '5'); // URLSearchParams { 'q' => 'hello world', 'limit' => '5' }

// Delete a param from URLSearchParams
params.delete('limit');
console.log(params); // URLSearchParams { 'q' => 'hello world' }