//Events
const EventEmitter = require('events');
const customEmitter = new EventEmitter();

//Order matters
customEmitter.on('response', (name,id) => {
	console.log(`data received from ${name}, id: ${id}`);
});

customEmitter.on('response', () => {
	console.log(`some other data received`);
});

customEmitter.emit('response', 'Soumadip Baerjee', 28);