///1
// var t = 1
// var r = 4

// if(true){console.log(t,r)}

//2
// var r = 4
// console.log('r')

//2,5 no insert

// var x = 1;
// var y = 5;
// var d = x + y
// [1, 2, 3].forEach(e => console.log(e));    // błąd ponieważ brakuje średnika linijke wyżej na końcu (kompilator widzi to jako kontynuacje, czyli złączone: var d = x + y[1, 2, 3].forEach(e => console.log(e)); )

// var x = 1
// var y = 5
// var d = x + y
// [1].forEach(e => console.log(e));   // to samo co wyżej BŁĄD ze względu na BRAK ŚREDNIKA

// var x = 1;
// var y = 5;
// var d = x + y
//     (function () {               // to samo co wyżej BŁĄD ze względu na BRAK ŚREDNIKA
//         console.log('call');
//     })();

// var x = [1, 2, 3]
// var t = x
// [1].toString()
// console.log(t);

// 3

// function semicolonTest() {
//     return                              // przez to, że tutaj nie zaczyna się klamra "{" to automatycznie interpreter kodu dodaje średnik ";" i wywala undefined!!!
//     {
//         test: 1
//     }
// }
// console.log(semicolonTest());

//4 Curly Braces

// function example()
// {
//     var get = function()
//     {
//         console.log('get');
//     }
//     return
//     {
//         get: get
//     }
// }
// console.log(example());

// function example()
// {
//     var get = function()
//     {
//         console.log('get');
//     }

//     return{
//         get: get
//     }
// }
// var i = example();
// console.log(example());
// example().get();



// function example(){
//     var get = function(){
//         console.log('get');
//     };

//     return{
//         get: get
//     };
// }
// console.log(example());
// example().get();

// 5 exists check

// var x;
// if(x){
//     console.log('X exists');
// }
// else{
//     console.log('X does not exists');        // to będzie wynik ponieważ x nie ma żadnej przypisanej wartości
// }

// var x=1;
// if(x){
//     console.log('X exists');             // to będzie wynik ponieważ ma przypisaną wartość
// }
// else{
//     console.log('X does not exists');
// }

// var x=0;
// if(x){
//     console.log('X exists');
// }
// else{
//     console.log('X does not exists');        // to będzie wynik ponieważ w JS wartość 0 jest falsy
// }

// if (x) {                                         // wartość x jest unavilable ponieważ nawet nie została zadeklarowana
//     console.log('X exists'); 
// }
// else {
//     console.log('X does not exists');
// }

// var x;
// if(typeof x !== 'undefined'){
//     console.log('X exists');
// }
// else{
//     console.log('X does not exists');
// }

// var x=0;
// if(typeof x !== 'undefined'){                    // porównując, czy wartość jest niedyfiniowana musi być zapisane jako string 'undefined'
//     console.log('X exists');
// }
// else{
//     console.log('X does not exists');
// }

// if(typeof x !== 'undefined'){
//     console.log('X exists');
// }
// else{
//     console.log('X does not exists');
// }

// var x;
// if (typeof x !== undefined) {           // porównanie do typu undefined, a nie napisu 'undefined' (nie jest to dobre porównanie ponieważ zwaraca typ jako string, a nie ?)
//     console.log('X exists');
// }
// else {
//     console.log('X does not exists');
// }
// console.log(typeof x);
// console.log(typeof typeof x);