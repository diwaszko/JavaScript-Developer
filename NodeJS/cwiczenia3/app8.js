// 8. Podzielmy naszą aplikację z punktu 8 na moduły odpowiednio:
// app.js – plik główny który uruchomi naszą aplikację i wywoła funkcje z naszego modułu user.js
// user.js – plik z pobieraniem danych użytkownika
// weather.js – plik z pobieraniem danych o prognozie pogody

// 9. Dodajmy do zadania 8 zapis do pliku obiektu składającego się z nazwy użytkownika oraz pobranej temperatury.

const getUser = require("./user.js");
const getWeather = require("./weather.js");
const argv = require("yargs").argv;
const fs = require("fs");

const id = argv.id;

getUser(id, (user) => {
    let userLat = user.address.geo.lat;
    let userLng = user.address.geo.lat;
    
    console.log(user.name);
    console.log(`lat: ${userLat}`);
    console.log(`lng: ${userLng}`);
    getWeather(userLat, userLng, (weather) => {
        console.log(weather.main.temp);
        const dataToSave = { user: user.name, temp: weather.main.temp };
        console.log(dataToSave);
    
        fs.writeFile("./data_weather.json", JSON.stringify(dataToSave), error => {
          if (error) {
            console.log(error.message);
            return;
          }
    
          console.log("File saved!");
        });
    });
});