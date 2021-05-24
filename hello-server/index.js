const http = require('http');

http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	reponse.write('Hello Server');
	response.end();
}).listen(3000);