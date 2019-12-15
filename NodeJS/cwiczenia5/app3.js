// 3. Wykorzystując składnię async stwórzmy funkcję zwracającą nasz pierwszy Promise
//  i wyświetlmy na ekranie hello world!.
// my func ... etc...

// myFunc()
//     .then(result => {
//         console.log(result);
//     });


// wersja z promisem
// const myFunc = () => {
//     return new Promise((resolve, reject) => {
//         resolve('hellow world!');
//     })
// }

// wersja z asynciem
const myFunc = async () => {
    return 'Hello world!'

}

myFunc()
    .then(result => {
        console.log(result);
    });