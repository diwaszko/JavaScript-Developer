//0

// let promise = new Promise(function(resolve, reject) {
//   console.log("promise code executed");
//   setTimeout(resolve, 500, "Karol Rogowski"); // mock API call
// });

// 1
// // promise wykonuje się zazwyczaj w odwołaniu do jakiegoś API - promise zawiera resolve i reject i stan
// let promise = new Promise(function (resolve, reject) {
//     console.log("promise code executed");
//     setTimeout(resolve, 4500, "Karol Rogowski");
// });

// // metoda then przyjmuje 2 funkcje callbackowe - poprawną i odrzucona z wartościami value i error
// promise.then(
//     value => console.log("fullfilled: " + value),
//     error => console.log("rejected: " + error)
// );

//2
// let promise = new Promise(function(resolve, reject) {
//   console.log("promise code executed");
//   setTimeout(reject, 500, "Karol Rogowski");
// });

// promise.then(
//   value => console.log("fullfilled: " + value),
//   error => console.log("rejected: " + error)
// );

//3
// let promise = new Promise(function(resolve, reject) {
//   console.log("promise code executed");
//   setTimeout(reject, 500, "Karol Rogowski");
// });
// promise.catch(error => console.log("rejected: " + error));
// promise.then(value => console.log("fullfilled: " + value));
// promise.catch(error => console.log("rejected2: " + error));

//4
// let promise = new Promise(function (resolve, reject) {
//     console.log("promise code executed");
//     setTimeout(reject, 500, "Karol Rogowski");
// });
// // promise można użwać tyle razy ile jest to potrzebne
// promise.catch(error => console.log("rejected: " + error));
// promise.then(
//     value => console.log("fullfilled: " + value),
//     error => console.log("rejected3: " + error)
// );
// promise.catch(error => console.log("rejected2: " + error));

//5
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 1000, "Karol Rogowski");
// });
// console.log("before handle");
// promise.then(
//   value => console.log("fullfilled: " + value),
//   error => console.log("rejected: " + error)
// );
// console.log("after handle");
