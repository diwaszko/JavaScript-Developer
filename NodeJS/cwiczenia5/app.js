// 0. Wykorzystując zdobytą wiedzę, stwórzmy prostą aplikację pozwalającą na przetrzymywanie w pliku listy zadań do wykonania 
// (klasyczna lista TODO). Użyjmy w tym celu biblioteki yargs z konstrukcją command. 
// Aplikacja powinna pozwalać na dodanie do listy nowego zadania, jak również wyświetlić zawartość całej listy.
// Przykładowe wywołanie programu:

// > node app.js dodaj "kupic mleko"
// > node app.js dodaj "napisac program na zaliczenie z NodeJS"
// > node app.js lista


// node app dodaj "kupic mleko"             - trzeba dodac "" gdy jest spacja 
// node app lista                           - 
// node app pomoc                           - na podstawie switcha wyswietla help

// alternatywą jest zdbudowanie własnych komend z dokumentacji yargsa (API, Example, Advanced - z menu na dole)

// command module z dokumentacji API
// do podzielenia na oddzielne pliki/moduly

// writeAppend nie zadziala, bo to beda obiekty
// licznik  ma być podpijany dla danego cytatu

const yargs = require('yargs').argv;

const dodaj = yargs.dodaj;
const lista = yargs.lista;
const action = yargs._[0];

switch (action) {
    case 'dodaj':
        console.log('dodaj zadanie:', yargs._[1]);
        break;
    case 'lista':
        console.log('lista:');
        break;
    case 'pomoc':
        console.log('dodaj ....');
        console.log('lista ....');
};

// console.log(dodaj, lista);
console.log(yargs);

// pobrana templatka z dokumentacji yargsa
require('yargs')
    .command({
        command: 'configure <key> [value]',
        aliases: ['config', 'cfg'],
        desc: 'Set a config variable',
        builder: (yargs) => yargs.default('value', 'true'),
        handler: (argv) => {
            console.log(`setting ${argv.key} to ${argv.value}`)
        }
    })
    // provide a minimum demand and a minimum demand message
    .demandCommand(1, 'You need at least one command before moving on')
    .help()
    .argv