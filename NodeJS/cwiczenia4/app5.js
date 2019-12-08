// 5. Dodajmy do naszej aplikacji z zadania 4 pobieranie pogody dla naszego użytkownika. 
// Podobnie jak w poprzednim laboratorium. Pamiętajmy o odpowiednim owrapowaniu naszego zapytania 
// do pogody. Analogicznie jak w zadaniu 4.
// Endpoint do pogody: 
// https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={lat}&lon={lng}
// Zarys wywołania aplikacji:
// ...
// const getWeather = (lat, lng) => ...
// getUser(2)
//     .then(user => {
//         ...
//         return getWeather(...)
//     })
//     .then(weather => ...)
//     .catch(...);

// 6. Zmodyfikujmy zadanie 5 tak, aby pobrać kilku użytkowników w tej samej chwili wykorzystując Promise.all(). Wyświetlmy ich imiona w konsoli. (id użytkowników: 2,5,7). Poinformujmy iż nasz Promise został w pełni rozwiązany.

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

const getWeather = (lat, lng) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    return new Promise((resolve, reject) => {
        request(
            url, { json: true },
            (err, res, body) => {
                if (!err && res.statusCode === 200) {
                    resolve(body);
                } else {
                    reject("user not found!");
                }
            }
        );
    });

}


const users = [3, 4, 5];

Promise.all(getUser(users)).then((users) => {
    console.log(users.name)
    const lat = users.address.geo.lat;
    const lng = users.address.geo.lng;
    return getWeather(lat, lng)
})
    .then(weather => console.log(weather.main.temp))
    .catch(error => {
        console.log('error', error)
    });

// getUser(12)
//     .then((user) => {
//         console.log(user.name)
//         const lat = user.address.geo.lat;
//         const lng = user.address.geo.lng;
//         return getWeather(lat, lng)
//     })
//     .then(weather => console.log(weather.main.temp))
//     .catch(error => {
//         console.log('error', error)
//     });
