let movieName = ('Titanic');
let movieTitle = ('Titanic The Movie');
console.log(movieName);
// breakpoint F5 - włącza się konsole z debugerem
// breakpoint F9
// debuger F10 - kolejny krok w debugerze
// do watcha można dodać zmienne i je obserwować każdym kliknięciem F10

movieName = "Titanic 2";
console.log(movieName);

// Token - oznacza, że na 99% błąd wynika ze składni np let var = "wartosc"; var nie może być nazwą zmiennej
// w debugerze  ^^^ wskazuje na błąd

// let var = "wartosc"; - błąd var nie może być nazwą zmiennej
// let example = 'I'm karol'; - błąd cudzysłów '
let example = "I'm karol";

let val1 = 4;
console.log(val1, typeof val1);
let val2 = '5';
console.log(val2, typeof val2);

console.log('4.1 + 1.1');
console.log(4.1 + 1.1); // wynik to 5.1999999999 - warto używać wartości pełnych (bo JS jest super dokładny w wartości po przecinku)

console.log('10 / 0');
console.log(10 / 0); // zwraca infinity 
console.log(typeof(10 / 0)); // jest to type = number

console.log(0 / 0); // zwraca NaN
console.log(typeof(0 / 0)); // ale jest type = number

let val5;
let val6 = null;
console.log(val5, typeof val5); // zmienna niezdeklarowana to undefined
console.log(val6, typeof val6); // zmienna o wartości null jest type = object

console.log(typeof {}); // w klamrach ozacza się obiekt
console.log(typeof function() {}); // function z klamrami oznacza się funkcję

// TABLICE 
let val7 = [2, 6, 33];
console.log(val7, typeof val7);
val7.push(99);
console.log(val7, typeof val7);

let val8 = [2, 6, 33, 'tekst', true, null, NaN, undefined];
console.log(val8, typeof val8);
val8.push(99, "ggf");
console.log(val8, typeof val8);

let j = "1234"; // string też jest "tablicą" w sensie można wykonywać niekótre metody na nim
console.log(j[1]); // zwraca index z tablicy

let val9 = [1, 2, 3, 4]
val9.splice(1, 2, 300, 300, 400, 500); //  PRZECIĄŻENIA (w intellisense znak ? oznacza, że jest to opcjonalne) usuwa elementy z tablicy i wkłada nowy element w to miejsce (zwraca usunięte elementy)
console.log(val9);

console.log(1 == 1); // true
console.log(1 == true); // true
console.log(1 === true); // false

// Operatory logiczne && i ||  - !precedens! operatorów - POCZYTAĆ

// w if else zawsze tylko jeden warunek może być wykonany, po tym nie sprawdza innych warunków (if else jest zachłanny)
// tak samo w przypadku switch (też jest zachłanny i wykona tylko 1 case), w switchu zawsze musi być break po każdym case

for (let i = 0; i < 5; i++){
    console.log(i);
}

// continiue i break - continue przeskakuje do początku pętli, break - wychodzi z pętli

// w pętli while trzeba uważać na to, aby w przypadku "continue" pilnować, aby dopisać i++ przed continue ponieważ w innym wypadku się zapętli w nieskończoność