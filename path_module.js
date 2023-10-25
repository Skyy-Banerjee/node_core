const path = require('path');

// sep: The platform-specific file separator. '\' or '/'.
console.log(path.sep);

/*
join() : Return the last portion of a path. Similar to the Unix basename command. Often used to extract the file name from a fully qualified path.
*/

const filePath = path.join('/path_content', 'subfolder', 'test.txt');

/*
base: Return the last portion of a path. Similar to the Unix basename command. Often used to extract the file name from a fully qualified path.
*/
const base = path.basename(filePath);

/*
resolve: The right-most parameter is considered {to}. Other parameters are considered an array of {from}.

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
