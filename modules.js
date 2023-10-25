const names = require('./namesModule');
const sayHi = require('./utils');
console.log(sayHi);
console.log(names);

sayHi('Skyy');
sayHi(names.John);
sayHi(names.Peter);