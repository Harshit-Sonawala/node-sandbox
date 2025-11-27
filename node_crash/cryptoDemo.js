import crypto from 'crypto';

// createHash() - creates a hash object configured with passed algorithm
const hash = crypto.createHash('SHA256'); // can be MD5, SHA1, SHA256 etc.
hash.update('password1234'); // hashing a password. Processes and updates internal state.
// hash.digest() - finalizes the hashing and returns the hexadecimal result.
console.log(hash.digest('hex')); // can be 'hex' or 'base64'

// Generate random bytes for various purposes like userids etc. - is async
crypto.randomBytes(16, (err, buf) => {
	if (err) throw err;
	console.log(`Random Bytes: ${buf.toString('hex')}`);
});

// Parameters for encrypting into ciphertext & decrypting into plaintext
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello this is a secret message', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(`\n\nCiphertext: ${encrypted}`);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(`Plaintext: ${decrypted}`);