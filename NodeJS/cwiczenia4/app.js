// 1. Stwórzmy pierwszą aplikację z wykorzystaniem Promise. 
// Zadaniem jest stworzeniem funkcji zwracającej Promise któym rozwiązaniem ma być wartość hello world.

// resolve zawsze trzeba podać, reject niekoniecznie
const helloPromise = new Promise((resolve, reject) => {
    resolve('hello world');
});

helloPromise.then(text => { console.log(text); });
