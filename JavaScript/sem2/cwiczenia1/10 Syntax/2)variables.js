//1
// console.log(r);              // nie wyświetli nic ponieważ let jest deklarowany w momencie, gdy pojawi się jego deklaracja
// let r;

// console.log(r);              // wynikiem będzie undefined ponieważ var przerzuca inicjalizację zmiennej na góre kodu
// var r;

// console.log(r);                 // wynikiem będzie undefined ponieważ var przerzuca inicjalizację zmiennej na góre kodu, ale wartość przypisuje dopiero w momencie, gdy przypisanie jest wykonane
// var r = 10;
// console.log(r);                 // wynikiem będzie 10 ponieważ wartość była przypisana przed consol logiem

//2
// console.log(r);          // undefined
// var r = 5;
// console.log(r);          // 5
// var r = 6;               // nie powinno się deklarować 2x tej samej zmiennej z var
// console.log(r);          // 6 

// var myVar = 10;
// function myfun(){
//     myVar = 11;
// }
// console.log(myVar);



// var myVar = 10;
// function myfun(){
//     myVar = 11;
// }
// myfun();
// console.log(myVar);


// var myVar = 10;
// function myfun() {
//     myVar = 11;
//     var myVar;                   // var jest przenoszony do linijki wyżej na samą górę w swoim scopie (w funkcji myFun)
// }
// myfun();
// console.log(myVar);