const express = require('express');
const app = express();

app.get('/name/:name?', function (req, res) {
    res.send('Welcome ' + (req.params.name || 'World'));
})

app.listen(4700);

// instalacja npm install express
// zmiana parametru w adresie get
// trzeba w adresie napisać http://localhost:4700/name/Daniel
// jeżeli nie bedzie wartości do parametru name to wyświetli zamiast imienia "World"