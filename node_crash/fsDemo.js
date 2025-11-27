// import fs from 'fs'; // for sync versions
import fs from 'fs/promises';

const writeFile = async (filePath) => {
	try {
		await fs.writeFile(filePath, 'Overwritten contents of the file.');
		console.log(`Written to file ${filePath}`);
	} catch (err) {
		console.log(err);
	}
};

const appendFile = async (filePath) => {
	try {
		await fs.appendFile(filePath, ' This is appended content...');
		console.log(`Appended to file ${filePath}`);
	} catch (err) {
		console.log(err);
	}
};

// 4. Best async-await version
const readFile = async (filePath) => {
	try {
		const data = await fs.readFile(filePath, 'utf8');
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};

await writeFile('./test.txt');
await appendFile('./test.txt');
await readFile('./test.txt');

// Other Versions
// // 1. Callback Function
// fs.readFile('./test.txt', 'utf8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });

// // 2. Synchronous Version - a giant file stops execution.
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// // 3. Promises version
// fs.readFile('./test.txt', 'utf8')
// 	.then((data) => { console.log(data); })
// 	.catch((err) => { console.log(err); });