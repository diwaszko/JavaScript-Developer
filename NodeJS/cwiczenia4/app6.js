// 6. Zmodyfikujmy zadanie 5 tak, aby pobrać kilku użytkowników w tej samej chwili wykorzystując Promise.all(). 
// Wyświetlmy ich imiona w konsoli. (id użytkowników: 2,5,7). Poinformujmy iż nasz Promise został w pełni rozwiązany.

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


const userId = [2, 5, 7];

const usersList = userId.map( (id) => getUser(id) );
Promise.all(usersList)
    .then((user) =>{
        return user.forEach( (user) => console.log(user.name) );
    })
    .catch(error => { 
        console.log('error', error) 
    })
    .finally(() => {
        console.log('End of Promise!')
    });
