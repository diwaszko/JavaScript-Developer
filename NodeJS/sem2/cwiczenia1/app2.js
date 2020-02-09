const http = require('http');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const name = url.searchParams.get('name') || 'World';

    res.end('Hello ' + name);
});

server.listen(4700);

// trzeba w adresie napisać http://localhost:4700/?name=Daniel
// jeżeli nie bedzie wartości do parametru name to wyświetli zamiast imienia "World"