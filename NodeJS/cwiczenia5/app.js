// 0. Wykorzystując zdobytą wiedzę, stwórzmy prostą aplikację pozwalającą na przetrzymywanie w pliku listy zadań do wykonania 
// (klasyczna lista TODO). Użyjmy w tym celu biblioteki yargs z konstrukcją command. 
// Aplikacja powinna pozwalać na dodanie do listy nowego zadania, jak również wyświetlić zawartość całej listy.
// Przykładowe wywołanie programu:

// > node app.js dodaj "kupic mleko"
// > node app.js dodaj "napisac program na zaliczenie z NodeJS"
// > node app.js lista

const argv = require('yargs').argv;

const dodaj = argv.dodaj;
const lista = argv.lista;

console.log(dodaj, lista);