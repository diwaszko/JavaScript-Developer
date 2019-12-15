// 9. Zamieńmy również z zadania 8 opakowanie funkcji writeFile, która została zaimplementowana na wbudowany mechanizm w NodeJS 
// zamieniający naszą funkcję zwrotną na Promise. W tym celu powinniśmy wykorzystać wbudowany moduł util 
// i funkcję util.promisify(link https://github.com/piotar/nodejs/tree/master/lab04#util.promisify)

const axios = require('axios');
const fs = require("fs");
const util = require('util');
const argv = require('yargs').argv;

const id = argv.id;
const writeFile = util.promisify(fs.writeFile);

const getUser = (userId, callback) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(function (response) {
        callback(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("User promises done!");
    });
}

const getWeather = (lat, lng, callback) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`)
    .then(function (response) {
        callback(response.data.weather);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("Weather promises done!");
    });
}    

getUser(id, (userData) => {
    let userLat = userData.address.geo.lat;
    let userLng = userData.address.geo.lng;

    console.log(userData.name, '\n', userLat, userLng);
    getWeather(userLat, userLng, (weather) => {
        console.log(weather);

        writeFile('./zapisana_pogoda-zad9.json', JSON.stringify([userData.name, weather]))
        .then( () => {
            console.log('File saved!');
        })
        .catch( error => {
            console.log('Error while saving:', error);
        })
    })
});