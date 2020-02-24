/*
    Stwórzmy pierwsze pełne REST API, które pozwoli nam na zarządzanie cytatami (klasyczny CRUD).
    -wyświetlane wszystkich cytatów (GET)
    -wyświetlane konkretnego cytatu (GET)
    -dodawanie cytatu (POST)
    -usunie cytatu (DELETE)
    -edytowanie cytatu (PUT)
*/

const express = require('express');
const router = express.Router();

let counter = 0;
let quotes = [{
    id: counter++,
    quote: 'czego to takie trudne',
    author: 'student FED'
}];

router.use(express.urlencoded());

router.get('/', (req, res) => {
    res.send(quotes);
});

router.get('/:id?', (req, res) => {
    const id = Number(req.params.id);
    const quote = quotes.find(q => q.id === id);            // +id lub Number(id)
    if (quote) {
        res.send(quote);
    } else {
        res.sendStatus(404);
    }
});

router.post('/add', (req, res) => {
    const { quote, author } = req.body;
    if (!quote || !author) {
        res.sendStatus(400);
    } else {
        const newQoute = {
            id: counter++,
            quote,
            author
        }
        quotes.push(newQoute);
        res.sendStatus(201);
    }
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    quotes = quotes.filter(q => q.id !== id);
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    const { quote, author } = req.body;
    const id = Number(req.params.id);
    const item = quotes.find(q => q.id === id);

    if (!item) {
        res.sendStatus(404);
    } else {
        if (!quote || !author) {
            res.sendStatus(400);
        } else {
            const newQoute = {
                id: counter++,
                quote,
                author
            }

            quotes = quotes.map(q => q === item ? newQoute : q);
            res.sendStatus(200);
        }
    }
});

module.exports = router;