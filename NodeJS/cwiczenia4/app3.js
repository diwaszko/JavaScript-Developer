// 3. Zadaniem kolejnym jest stworzenie funkcji odejmowania 2 licz z wykorzystaniem Promise. 
// Stwórzmy regułę jeżeli wynik działania będzie ujemny Promise powinien zwrócić błąd, 
// jeżeli wynik jest dodatni Promise powinien się rozwiązać poprawnie przekazując wynik działania.

const sub = (a, b) => {
    let sum = a - b;
    return new Promise((resolve, reject) => {
        if (sum >= 0) {
            resolve(`${sum} jest dodatnia`);
        }
        else { reject(`${sum} jest ujemna`); }
    });
}


const abc = sub(5, 4);

// w kazdym momencie mozna sie podpiac pod promisa z nowa wartoscią przypisujac do zmiennej xyz
const xyz = abc.then(result => {
    console.log(result)
    return 'nowa wartosc'
})
    .catch(error => {
        console.log(error)
    });
// 2
xyz.then(result => {
    console.log(result)
})
    .catch(error => {
        console.log(error)
    });

