// 8. Podzielmy naszą aplikację z punktu 8 na moduły odpowiednio:
// app.js – plik główny który uruchomi naszą aplikację i wywoła funkcje z naszego modułu user.js
// user.js – plik z pobieraniem danych użytkownika
// weather.js – plik z pobieraniem danych o prognozie pogody

// 9. Dodajmy do zadania 8 zapis do pliku obiektu składającego się z nazwy użytkownika oraz pobranej temperatury.

const user = require("./user.js");
const argv = require("yargs").argv;

const id = argv.id;

user.getUserInfo(id);