// 8. Jak wiadomo świat JS jest bardzo rozbudowany i nie trzeba za każdym razem tworzyć od nowa 
// konstrukcji asynchronicznych żądań do serwera. Są od tego biblioteki😊 Na stronie 
// https://npmjs.org 
// możemy znaleźć dużo różnych implementacji bibliotek które udostępniają już gotowe obiekty przystosowane do Promise, np.:

// axios (https://www.npmjs.com/package/axios)
// request-promise (https://www.npmjs.com/package/request-promise)
// Zadaniem 8 jest wykorzystanie biblioteki axios. Z zadania 7 podmieńmy request wraz z naszymi Promise na użycie biblioteki axios.


const axios = require('axios');
const fs = require("fs");
const argv = require('yargs').argv;

const id = argv.id;

const getUser = (userId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then( (response) => {
            return response.data;
        })
        .catch( (error) => {
            console.log(error.message);
        })
        .finally( () => {
            console.log("User promises done!");
        });
}

const getWeather = (lat, lng) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`)
        .then( (response) => {
            return response.data;
        })
        .catch( (error) => {
            console.log(error.message);
        })
        .finally( () => {
            console.log("Weather promises done!");
        });
}

const saveFile = (fileName, weather) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, JSON.stringify(weather), () => {
            resolve('Plik został zapisany');
        })
    })
}

getUser(id)
    .then(user => {
        console.log(user.name);
        return getWeather(user.address.geo.lat, user.address.geo.lng);
    })
    .then(weather => {
        console.log(weather.main.temp);
        return saveFile('./zapisana_pogoda-zad8.json', weather);
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
