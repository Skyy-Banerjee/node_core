const { readFile, writeFile } = require('fs');
console.log('1. Start..');

// readFile: Asynchronously reads the entire contents of a file.
/*
writefile:
When file is a filename, asynchronously writes data to the file, replacing the file if it already exists. data can be a string or a buffer.

When file is a file descriptor, the behavior is similar to callingfs.write() directly (which is recommended). See the notes below on using a file descriptor.

The encoding option is ignored if data is a buffer.
The mode option only affects the newly created file.
*/

//First, with callbacks.
readFile('./content/first.txt', 'utf-8', (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	//console.log(result);
	const first = result;
	readFile('./content/first.txt', 'utf-8', (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		//console.log(result);
		const second = result;
		writeFile(
			'content/result-async.txt',
			`Here are the results: ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log('3. Done with this task');
			},
			//! To append
			// { flag: 'a' },
		);
	});
});

console.log('2. Starting  next task!');
