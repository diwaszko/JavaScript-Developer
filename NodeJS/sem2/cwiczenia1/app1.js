const http = require('http');

// tworzymy nową instancję naszego serwera
const server = http.createServer((req, res) => {
    // ustawiamy statusCode oraz typ wysłanej odpowiedzi
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // zamykamy połączenie wysyłając tekst
    res.end('test');
});

// uruchamiamy nasz serwer na porcie 4500
server.listen(4700);



// npm i nodemon
// npx nodemon app7             - uruchamianie servera z nodemon (dzieki temu nie trzeba tworzyc go przy zmianach od poczatku za kazdym razem)