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
    eol: os.EOL,
};

console.log(curentOS);
