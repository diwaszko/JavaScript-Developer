const argv = require('yargs').argv;                 // końcówka .argv parsuje wartosci
const calc = require('./math');                     // node app6.js --a=5 --b=17 --operator=*  komenda (z wartosciami do kalkulatora - obliczen)


const operator = argv.operator;
const a = argv.a;
const b = argv.b;

switch ( operator ){
    case '+': 
    console.log(calc.adding(a,b));
    break;
    case '-': 
    console.log(calc.subtraction(a,b));
    break;
    case '*': 
    console.log(calc.muliplay(a,b));
    break;
    case '/': 
    console.log(calc.divide(a,b));
    break
}