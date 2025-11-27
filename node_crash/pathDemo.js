import path from 'path';
import url from 'url';

const filePath = './example/dir1/dir2/file.txt';

console.log(path.dirname(filePath)); // ./example/dir1/dir2
console.log(path.basename(filePath)); // file.txt
console.log(path.extname(filePath)); // .txt
console.log(path.parse(filePath));
// {
//   root: '',
//   dir: './example/dir1/dir2',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }

// dirname and filename of the current file
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename); // C:\Dev\backend_projects\node_crash\pathDemo.js
console.log(__dirname); // C:\Dev\backend_projects\node_crash

// join & resolve paths
const filePath2 = path.join(__dirname, 'joined1', 'joined2', 'test.txt');
console.log(filePath2); // C:\Dev\backend_projects\node_crash\joined1\joined2\test.txt
const filePath3 = path.resolve(__dirname, 'resolved1', 'resolved2', 'test.txt');
console.log(filePath3); // C:\Dev\backend_projects\node_crash\resolved1\resolved2\test.txt