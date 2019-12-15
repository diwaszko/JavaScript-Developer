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

// sposób z awaitem z IFIE dlatego, że await musi byc zawsze w IFIE - to pomoc do 5 zadania (nie jest gotowe)

(async () => {
    try {
        const wynik = await add(2, 3)
        console.log(wynik);
    } catch (error) {
        console.log(error.message);
    }
})()

// // sposób bez awaita - wlasciwy dla zadania 4

add(3, 3)
    .then(wynik => {
        console.log('Wynik:', wynik);
    })
    .catch(error => {
        console.log(error.name, error.message);
    })
