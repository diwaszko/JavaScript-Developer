// Dodajmy do zadania 5 możliwość dynamicznego wprowadzania ID poprzez użycie zewnętrznej biblioteki yargs.
// Przykład uruchomienia aplikacji:

// Dla node app.js --id=2
// Wynik w konsoli:
// Ervin Howell
// lat -43.9509
// lng -34.4618

// Dla node app.js --id=20
// Wynik w konsoli:
// User not found.

const request = require("request");
const argv = require("yargs").argv;

const id = argv.id;
const url = `https://jsonplaceholder.typicode.com/users/${id}`;
request(
  url,
  // { json: true },    // można tak oznaczyc jako json true (2 parametr)
  (err, res, body) => {
    if (res.statusCode === 200) {
      // jeżeli działa statuskod = 200 to wtedy przechodzi kod
      const data = JSON.parse(body); // lub tak jako parsowanie
      console.log(data.name, "is here:\n", data.address.geo); // tutaj obiekt jest wypisany (nie jest to strigniem)
      console.log(`${data.name} is here:\n ${data.address.geo}`); // jeżeli obiekt jest parsowany do stringa zwroci zawsze Object object
    } else if (res.statusCode === 404) {
      return console.log("User not found!");
    } else {
      return console.log("error!!!");
    }
  }
);
