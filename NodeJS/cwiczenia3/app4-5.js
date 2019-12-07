// 4. Stwórz aplikację która pobierze informację o użytkowniku podając jego id z API i wyświetli w konsoli współrzędne geograficzne skąd dany użytkownik pochodzi oraz jego imię.
// Adres URL do API: https://jsonplaceholder.typicode.com/users/{ID} gdzie ID to identyfikator użytkownika.
// Endpoint z przykładowym ID: https://jsonplaceholder.typicode.com/users/2

// Wynik w konsoli:
// Ervin Howell
// lat -43.9509
// lng -34.4618
// 5. Rozszerzmy zadanie 4 tak aby nasza aplikacja poinformowała użytkownika o błędzie pobierania danych lub braku szukanego użytkownika w bazie. (link do opisu funkcji zwrotnej modułu request)


const request = require("request");
const argv = require("yargs").argv;

const id = argv.id;
const url = `https://jsonplaceholder.typicode.com/users/${id}`;
request(
  url,
  // { json: true },    // można tak oznaczyc jako json true (2 parametr)
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    const data = JSON.parse(body); // lub tak jako parsowanie
    console.log(data.name, "is here:\n", data.address.geo); // tutaj obiekt jest wypisany (nie jest to strigniem)
    console.log(`${data.name} is here:\n ${data.address.geo}`); // jeżeli obiekt jest parsowany do stringa zwroci zawsze Object object
  }
);

// w konsoli wywowłac program     node app4-5 --id=3
