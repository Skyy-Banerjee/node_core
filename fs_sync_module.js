//fs module

//Let's destructure this time
const { readFileSync, writeFileSync } = require('fs');
console.log('1. start');

/*
readFileSync:
Synchronously reads the entire contents of a file.

@param path
A path to a file. If a URL is provided, it must use the file: protocol. If a file descriptor is provided, the underlying file will not be closed automatically.

@param options
Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to 'r'.
*/
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, '---', second);

/*
writeFileSync:
Returns undefined.
Creates a new file only if it doesn't already exist.
And overwrites the existing file.
The mode option only affects the newly created file. See open for more details.

*/
writeFileSync(
	'./content/result-sync.txt',
	`Here are the results: ${first}, ${second}`,
	//! To append
	{ flag: 'a' },
);

console.log('3. Done with this task!');
console.log('2. Starting the next one');
