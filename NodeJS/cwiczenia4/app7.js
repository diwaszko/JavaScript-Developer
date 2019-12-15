// 7. Dodajmy do zadania 5 zapis całego obiektu pogody do pliku wykorzystując wbudowany moduł fs i funkcję writeFile. 
// Oczywiście zadanie polega na odpowiednim dostosowaniu funkcji aby obsługiwała Promise.

const request = require("request");
const fs = require("fs");

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
const saveFile = (fileName, weather) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, JSON.stringify(weather), () => {
            resolve('Plik został zapisany');
        })
    })
}


getUser(2)
    .then((user) => {
        console.log(user.name);
        let lat = user.address.geo.lat;
        let lng = user.address.geo.lng;

        return getWeather(lat, lng);
    })
    .then(weather => {
        console.log(weather.main.temp);
        return saveFile('pogoda-zad7.json', weather);
    })
    .then(text => {
        console.log(text);
    })
    .catch(error => {
        console.log('error', error)
    });
