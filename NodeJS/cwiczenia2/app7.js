const argv = require('yargs').argv;                 // końcówka .argv parsuje wartosci
const calc = require('./math2');                    // node app6.js --a=5 --b=17 --operator=*  komenda (z wartosciami do kalkulatora - obliczen)
const fs = require('fs');                          // import funkcji do zapisywania
                                                    // yargs - będzie na zaliczeniu!!!!!!!!!!!!!!

const operator = argv.operator;
const a = argv.a;
const b = argv.b;

function addCallback(wynik, pi){
    console.log('-----------------------------------');
    console.log(wynik);
    console.log(pi);
    fs.writeFile('wynik.txt', wynik, function(){
        console.log('Zapisano plik!');
        // fs.readFile('wynik.txt', 'utf-8', function(error, data){
        //     console.log(data);
        //     console.log(error);
        // })
    })
}

switch ( operator ){
    case '+': 
    calc.adding(a, b, addCallback);
    break;
    case '-': 
    calc.subtraction(a, b, addCallback);
    break;
    case '*': 
    calc.muliplay(a, b, addCallback);
    break;
    case '/': 
    calc.divide(a, b, addCallback);
    break
}