// 2. Zmodyfikuj zadanie 1 tak aby rozwiązanie Promise było asynchroniczne. 
// Wykorzystajmy do tego celu funkcję setTimeout z 5 sekundowym opóźnieniem.

console.log('start');
const helloPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'hello world');

    //  // lub tak
    // setTimeout(function () {
    //     resolve('hello world');
    // }, 5000);
});

helloPromise.then(text => {
    console.log(text);
});
console.log('stop');