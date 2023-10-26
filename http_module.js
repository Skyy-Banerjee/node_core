//http module
// reference: https://www.w3schools.com/nodejs/nodejs_http.asp

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