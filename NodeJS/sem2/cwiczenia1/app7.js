// 7. Wzorując się na zadaniu 6 stwórzmy analogicznie obsługę tablicy zawierającej posty. 
// Aplikacja ma rozszerzyć naszą już istniejącą aplikację z zadania 6.

const express = require('express');
const app = express();

const users = [{
    name: 'Jan',
    userName: 'janko',
    email: 'jan@nowak.abc'
}];

const posts = [{
    text: 'nowy post',
}]
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

app.get('/posts/add', function (req, res) {             // kolejność ma znaczenie jeżeli to będzie pod nastepnym getem to nie bedzie działąc
    posts.push(req.query);
    res.send(posts);
});


app.get('/posts/:id?', function (req, res) {
    const { id } = req.params;
    const result = id ? posts[id] : posts;
    res.send(result);
})


app.get('/posts/delete/:id?', function (req, res) {
    const { id } = req.params;
    posts.splice(id, 1);

    res.send(posts);
})

app.listen(4700, () => {
    console.log('działa');
});
