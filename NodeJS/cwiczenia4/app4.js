// 4. Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki request 
// i pobierzmy użytkownika dane(https://jsonplaceholder.typicode.com/users/2). 
// Przeróbmy tak wywołanie naszego zapytania aby wykorzystywało Promise.

// const getUser = (id) => {
//     ... // <- implementacja Promise
// }

// getUser(2)
//     .then(...)
//     .catch(...);
const request = require("request");

const getUser = (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return new Promise((resolve, reject) => {
        request(
            url, { json: true },
            (err, res, user) => {
                if (!err && res.statusCode === 200) {
                    resolve(user);
                } else {
                    reject("user not found!");
                }
            }
        );
    });

}
getUser(4)
    .then((user) => {
        console.log(user.name)
    })
    .catch(error => {
        console.log('error', error)
    });
