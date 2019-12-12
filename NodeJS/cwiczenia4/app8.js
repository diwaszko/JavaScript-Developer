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
        fs.writeFile('./zapisana_pogoda-zad8.json', JSON.stringify(weather), error => {
            if  (error) {
                 console.log(error.message);
            } 
            console.log('File saved!')
         })
    })
});