// 4. Stwórzmy aplikację która pobierając 2 parametry a i b z adresu url wykona mnożenie w naszej aplikacji.
// Rezultat działania powinniśmy wysłać do użytkownika końcowego(klienta).


const express = require('express');
const app = express();

app.get('/mnoz/:numOne/:numTwo', function (req, res) {
    const { numOne, numTwo } = req.params;
    const result = Number(numOne) * Number(numTwo);
    res.send(200, result);
})
app.get('/dziel/:numOne/:numTwo', function (req, res) {
    const { numOne, numTwo } = req.params;
    const result = +numOne / +numTwo;
    res.send(200, result);
})
app.get('/dodaj/:numOne/:numTwo', function (req, res) {
    const { numOne, numTwo } = req.params;
    const result = Number(numOne) + Number(numTwo);
    res.send(200, result);
})
app.get('/odejmij/:numOne/:numTwo', function (req, res) {
    const { numOne, numTwo } = req.params;
    const result = Number(numOne) - Number(numTwo);
    res.send(200, result);
})


app.listen(4700, () => {
    console.log('działa');
});

// można parsować na liczby zarówno Number('22') jak i dodaniem + przed stringiem
