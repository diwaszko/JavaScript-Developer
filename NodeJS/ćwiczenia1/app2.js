const calculator = require('./math');

console.log('Wynik dodawania 4 + 10 =', calculator.dodaj(4, 10));
console.log('Wynik odejmowania 40 - 10 =', calculator.subtraction(40, 10));
console.log('Wynik mnożenia 10 * 10 =', calculator.muliplay(10, 10));
console.log('Wynik dzielenia 100 / 10 =', calculator.divide(100, 10));
console.log('Pi wynosi:', calculator.PI);

let result = '4 + 10 = ' + calculator.dodaj(4, 10) + '\n';       // '\n' dodaje nową linię (enter) w zapisywanym pliku

const fs = require('fs');
fs.writeFileSync('wynik.txt', result);                       // zapisuje/nadpisuje w pliku wynik.txt result, czyli wynik dodawnia

let subResult = '40 - 10 = ' + calculator.subtraction(40, 10);
fs.appendFileSync('wynik.txt', subResult);                        // dodaje w pliku wynik.txt wartość ze zmiennej subResult (nie usuwa poprzednich zapisów w pliku)


const myData = fs.readFileSync('wynik.txt', 'utf-8');           // wczytanie pliku - bez utf-8 node nie będzie wiedział, że chcemy wczytać plik txt (musi znać typ kodowania)
console.log(myData);
// console.log(myData + '');                                    // jeżeli nie napiszemy utf-8 możemy dodać + ''
// console.log(myData.toString);                                // lub toString???? zły zapis - poprawić

