// 1. Wykorzystując ścieżki ze wzorcem(string pattern) stwórzmy web serwer,
// który udostępni końcówkę pozwalającą wyliczyć nam podatek z podanej kwoty i zwróci nam 2 wartości:
// podatek oraz kwota bez podatku.
// http://localhost:4700/podatek/19/25
// gdzie 19 to podatek, a 25 to kwota
// w rezultacie: { "tax": 5, "amount": 20 }
// 2. zmodyfikujmy zadanie 1 tak aby dane były przesyłane metodą POST zamiast GET.
// W tym celu powinniśmy zmodyfikować naszą ścieżkę oraz pobieranie parametrów.
// Aby możliwe było przetestowanie wysłanego żądania zainstalujmy POSTMAN'a

const express = require('express');
const app = express();

const taxRouter = require('./tax');
const quotes = require('./quotes');


app.use(express.json());        // w postmanie wywolwac post z linkiem http://localhost:4700/podatek/ wybrac body i ustawić raw -> json (w okienku wpisac wartosci z jsona: "tax": "25", "amount": "5" })
app.use(express.urlencoded()); // jako urlencodex
app.use(express.text());        // jako text

app.use('/podatek', taxRouter);
app.use('/quotes', quotes);

app.listen(4700, () => {
    console.log('działa');
});


// w postmanie wybrać + na środku i wkleić link  http://localhost:4700/podatek/19/25