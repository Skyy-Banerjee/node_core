# Built-In Modules:

# Built-In fx() for us to use

# The main ones =>

- OS
- PATH
- FS
- HTTP

1. OS Module

# reference: https://www.tutorialandexample.com/node-js-os-module

```js
//built-in modules needn't be imported
//Only exrenal ones and 3rd party modules need to be imported

const os = require('os');

//! info about current user
const user = os.userInfo();
console.log(user);

//!  method returns the system uptime in seconds
console.log(`System uptime is ${os.uptime} seconds`);

const curentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
	arch: os.arch(),
};

console.log(curentOS);

//Output:
/*
$ node app
{
  uid: -1,
  gid: -1,
  username: 'ĀḌṀĪṆ',
  homedir: 'C:\\Users\\ĀḌṀĪṆ',        
  shell: null
}
System uptime is 1968016.484 seconds  
{
  name: 'Windows_NT',
  release: '10.0.19045',
  totalMem: 8463224832,
  freeMem: 2529824768,
  arch: 'x64',
  eol: '\r\n'
}
*/
```

2. PATH Module

# reference: https://www.w3schools.com/nodejs/ref_path.asp

```js
//path_content => subfolder => test.txt ('testing path module in NodeJs')
const path = require('path');

// sep: The platform-specific file separator. '\' or '/'.
console.log(path.sep);

/*
join():
Return the last portion of a path. Similar to the Unix basename command. Often used to extract the file name from a fully qualified path.
*/

const filePath = path.join('/path_content', 'subfolder', 'test.txt');

/*
base:
Return the last portion of a path. Similar to the Unix basename command. Often used to extract the file name from a fully qualified path.
*/
const base = path.basename(filePath);

/*
resolve:
The right-most parameter is considered {to}. Other parameters are considered an array of {from}.

Starting from leftmost {from} parameter, resolves {to} to an absolute path.

If {to} isn't already absolute, {from} arguments are prepended in right to left order, until an absolute path is found. If after using all {from} paths still no absolute path is found, the current working directory is used as well. The resulting path is normalized, and trailing slashes are removed unless the path gets resolved to the root directory.

@param paths — A sequence of paths or path segments.

@throws — {TypeError} if any of the arguments is not a string.
*/
const absolute = path.resolve(
	__dirname,
	'path_content',
	'subfolder',
	'test.txt',
);

// OP:
console.log(filePath); //\
console.log(base); // \path_content\subfolder\test.txt
console.log(absolute); //C:\Users\ĀḌṀĪṆ\Desktop\node-tut\path_content\subfolder\test.txt
```

3. FS Module

# reference: https://heynode.com/tutorial/what-fs-file-system-module/?code=def50200dc348be89907b5ba914004e683a40aa02edbb138b5d23176d516d1622ce9abd62bcd2f2dfc80f978ec2126c6922c7e4335ead18cc5029fdfe0f38c6f9c6c9ed783adaab6bc41a39218e691ef92863695334295ec0cb77191815750cd8310c69dde4aa1f0d407c69e6ab82b758c04de4279c355e3d9ca71586dbbbefc3247eaba1a204c519c4c417afa2472772de61a09c948f98a85828ef9435676bd43847dd7d2167153ce1d959df2713ef00e5d1977506920bbe8a32de76bd068f1b49c04c16a92c97ad7d3eeedf3d3b73b145ecb2b47b24b88c1319b06d79f8e59382ab2243839755e4dd4675648b96ed25f167fdfda0baa0d69b31cb08d18eb6124d5c65857f97689200c32a9a37ef26ff6df0781253dd0837480093d1c8b5d297d7361399e3c378ea5ac69dfa47bad5e2c4ed6ab9e54bcd9250621c7f75dbf9e012b2ada5fd614fef78a4d127ac99676c257c0a01d6620654de4da9145679912c92c5cbdb0520a38c550a8cc929f076a7b6f749dd023b4726967281d42589bf2bb944cecfbeb4ad099c088adf6f78d7a1f9bd8311a22070d5e1bfee4b06e163c6310&state=%7B%7D

# First, the SYNC way

```js
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
```

# Now, the ASYNC way

```js
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
```

4. HTTP Module

# reference: https://www.w3schools.com/nodejs/nodejs_http.asp

```js
const http = require('http');
const port = 5000;

const server = http.createServer((req, resp) => {
	//console.log(req); //Giant obj{}
	if (req.url === '/') {
		resp.end('Welcome to our home page!');
		return;
	}
	if (req.url === '/about') {
		resp.end('Here is our about page!');
		return;
	}
	resp.end(
		`<h1>Oops!</h1>
        <p>We can't seem to find the page!</p>
        <a href="/">Back Home?</a>
        `,
	);
});

server.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});
```
