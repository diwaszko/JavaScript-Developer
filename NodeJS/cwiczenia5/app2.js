// 2. Stwórzmy aplikację która będzie posiadała funkcję dzielenia 2 liczb.
// Jak wiadomo JS jest ciekawym językiem, który pozwala dzielić przez 0... 
// efektem dzielenia przez zero jest wartość Infinity, np.:

// const result = 2 / 0;
// console.log(result); // => Infinity
// Zabezpieczmy naszą aplikację tak aby funkcja dzielenia rzucała wyjątkiem w przypadtku,
//  gdy drugi parametr ma wartość 0 (np. new Error('divide by 0')).

// Oczywiście stwórzmy przykładowe wywołanie naszej funkcji z blokiem try..catch.

const fs = require("fs");

const div = (a, b) => {
    if (b === 0) {
        throw new Error("Nie dzielimy przez 0")
    }
    return a / b;
}

try {
    const result = div(2, 0);
    console.log('Wynik:', result);
} catch (error) {
    console.log(error.name, error.message);
}