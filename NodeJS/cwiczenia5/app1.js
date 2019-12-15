//1. W katalogu 01 znajduje się plik user.json. Wykorzystując wiedzę z poprzednich zajęć,
// stwórzmy aplikację wczytującą naszego użytkownika z pliku i zamieńmy go na obiekt JS oraz wyświetlmy w konsoli jego imię.
// Użyjmy w tym zadaniu funkcję readFileSync z wbudowanego modułu fs oraz funkcję JSON.parse do 
// przeparsowania wczytanej zawartości do obiektu.

// Zabezpieczmy naszą aplikację tak aby wyłapać błąd prasowania lub odczytu pliku i poinformujmy o tym użytkownika.

const argv = require('yargs').argv;
const fs = require("fs");

const dodaj = argv.dodaj;
const lista = argv.lista;


try {
    const user = JSON.parse(fs.readFileSync("./user.json", "UTF-8"));

    console.log(user);
} catch(error) {
    console.log(error.name, error.message);
} finally {
    console.log('All done!');
}
