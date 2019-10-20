let najmniejszaBezpiecznaLiczba = Number.MIN_SAFE_INTEGER;
let najmniejszaWartosc = Number.MIN_VALUE;

// Number.MIN_SAFE_INTEGER          - można określić dla zmiennej najmniejszą możliwą bepieczną liczbę
// Number.MIN_VALUE                 - można określić dla zmiennej najmniejszą możliwą wartość

console.log(najmniejszaBezpiecznaLiczba);
console.log(najmniejszaWartosc);

// FUNKCJE

// hoisting
let x = 10;
let y = 20;
function hoistingPrzyklad(){
    console.log(x);             // ta wartość będzie undifined przez hoisting
    let x = 5;                  // ta wartość zostanie zadeklarowana jako scope wewątrz funkcji
    console.log(x);             // ta wartość będzie = 5
}
console.log(x);

// OBIEKTY
// < > oznacza typ generyczny (ze trzyma inny typ)

// PRZEJRZEC DOKUMENTACJE ARRAY W MOZZILI !!!!!!!!! PRZECZYTAC