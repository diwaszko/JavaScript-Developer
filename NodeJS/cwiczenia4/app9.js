// 9. Zamieńmy również z zadania 8 opakowanie funkcji writeFile, która została zaimplementowana na wbudowany mechanizm w NodeJS 
// zamieniający naszą funkcję zwrotną na Promise. W tym celu powinniśmy wykorzystać wbudowany moduł util 
// i funkcję util.promisify(link https://github.com/piotar/nodejs/tree/master/lab04#util.promisify)

const axios = require('axios');
const fs = require("fs");
const util = require('util');
const argv = require('yargs').argv;

const id = argv.id;
const writeFile = util.promisify(fs.writeFile);

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
    return writeFile(fileName, JSON.stringify(weather))
            .then( () => 'Plik został zapisany')
}

getUser(id)
    .then(user => {
        console.log(user.name);
        return getWeather(user.address.geo.lat, user.address.geo.lng);
    })
    .then(weather => {
        console.log(weather.main.temp);
        return saveFile('./zapisana_pogoda-zad9.json', weather);
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
