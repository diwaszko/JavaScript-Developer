// 6. Stwórzmy aplikację której zadaniem będzie operacja na tablicy zawierającej użytkowników
// - Stworzyć 'końcówkę' /add do dodawania użytkownika która przyjmuje 
//   parametry ?name=Jan&username=janko&email=jan@nowak.abc
// - Dodać ścieżkę wyświetlania wszystkich użytkowników oraz jeżeli zostanie
//   podany odpowiedni id wyświetlić jedynie jednego użytkownika
// - Rozszerzyć aplikację o kasowanie użytkownika poprzez odpowiednią ścieżkę.

const express = require('express');
const app = express();

const users = [{
    name: 'Jan',
    userName: 'janko',
    email: 'jan@nowak.abc'
}];

// app.get('/add/:name/:username/:email', function (req, res) {
//     const { name, username, email } = req.params;
//     users.push({
//         name: name,
//         userName: username,
//         email: email
//     })
//     const result = (name, username, email);
//     res.send(200, result);
// })


app.get('/users/:id?', function (req, res) {
    const { id } = req.params;
    const result = id ? users[id] : users;
    res.send(result);
})

app.get('/add', function (req, res) {
    users.push(req.query);
    res.send(users);
});

app.get('/delete/:id?', function (req, res) {
    const { id } = req.params;
    users.splice(id, 1);

    res.send(users);
})


app.listen(4700, () => {
    console.log('działa');
});

// /users
// 
