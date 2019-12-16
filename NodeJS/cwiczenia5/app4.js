// 4. Stwórzmy aplikację która będzie posiadała funkcję asynchroniczną dodawnia 2 liczb do siebie (async).
//  Jeżeli wynik będzie liczbą parzystą powinniśmy wyrzucić błąd i poinformować użytkownika o tym fakcie.
// my func ... etc...

// add(4, 5)
//     .then(... )
//     .catch(... );

const add = async (a, b) => {
    const result = a + b;
    if (result % 2 === 0) {
        throw new Error("Wynik jest parzysty.")
    }
    return result;
}

add(4, 2)
    .then(wynik => {
        console.log('Wynik:', wynik);
    })
    .catch(error => {
        console.log(error.name, error.message);
    })
