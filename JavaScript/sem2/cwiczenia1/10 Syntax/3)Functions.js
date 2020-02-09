//functions

// function declarationFunc() {             // normalne deklaracja i wywołąnie funkcji (wyrazenie dekleracyjne)
//     console.log('declarationFunc');
// }
// declarationFunc();


// declarationFunc();                      // wywołanie funkcji przed jej deklaracją (wyrazenie dekleracyjne) zadziała ponieważ hosting funkcji nie ogranicza jej wywołania jak w przypadku zmiennych
// function declarationFunc() {
//     console.log('declarationFunc');
// }


// var expresionFunc = function () {           // przypisanie funkcji do jakiegoś wyrażenia (wyrazenie ekspresywne) - poprawne
//     console.log('expresionFunc');
// };
// expresionFunc();

// expresionFunc();                               // niepoprawne wywołanie funkcji ponieważ w tym przypadku funkcja jest przypisana do zmiennej i nie może być wywołana zanim zostanie przypisana do zmiennej (hoisting zmiennych działą tutaj)
// var expresionFunc = function () {
//     console.log('expresionFunc');
// };


// var outName = function inName() {
//     // ..
// };


// var outName = function inName() {
//     console.log(inName);                    // wewnątrz jest dostęp do funkcji inName (można korzystać tylko wewnątrz funkcji z nazwy inName!!!), ale później wyrzuca błąd dlatego nie działa
// };
// outName();
// console.log(inName);


// var outName = function inName() {               // ten kod się wykona ponieważ inName nie jest używane poza funkcją
//     inName = 42;                                // C.D. inName jest wartośćią tylko do odczytu
//     console.log(inName);
// };
// outName();


askQuestion();                                            // nie zadziała ponieważ let ze zmienną jest za wywołąniem
let studentName = "Suzy";
function askQuestion() {
    console.log(`${studentName}, what do you think?`);
}


// askQuestion();
// var studentName = "Suzy";
// function askQuestion() {
//     console.log(`${ studentName }, what do you think?`);
// }


// let studentName = "Suzy";
// askQuestion();
// function askQuestion() {
//     console.log(`${ studentName }, what do you think?`);
// }