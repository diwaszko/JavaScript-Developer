<<<<<<< HEAD
// 7. Wykorzystując zadanie 6 dodajmy opcję pobrania pogody dla wczytanego użytkownika. Pamiętajmy o odpowiednim zabezpieczeniu naszej aplikacji w przypadku błędu API(podobnie jak w z zadaniu 5).
// Adres do pobrania danych:
// https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}
// gdzie `{LAT}` i `{LNG}` to współrzędne geograficzne pobrane od naszego użytkownika



// Trzeba podzielić pobieranie pogody i info o użytkowniku na 2 oddzielne części - dostępne będzie na gitcie
const request = require("request");
const argv = require("yargs").argv;

const id = argv.id;
const url = `https://jsonplaceholder.typicode.com/users/${id}`;
request(
  url,
  (err, res, body) => {
    if (res.statusCode === 404) {
      console.log(`User not found!`);
      return;
    }
    if (res.statusCode != 200) {
      console.log(
        `Data not found. Status code: ${res.statusCode}`
      );
      return;
    }
    if (res.statusCode === 200) {

      const data = JSON.parse(body);
      const userName = data.name;
      const userLat = data.address.geo.lat;
      const userLng = data.address.geo.lng;

      console.log(userName);
      console.log("Lat:", userLat);
      console.log("Lng:", userLng);

      const wetaherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${userLat}&lon=${userLng}`;
      request(
        wetaherUrl,
        (err, res, body) => {
          if (err) {
            console.log("Server connection error.");
            return;
          }
          if (res.statusCode === 404) {
            console.log(`Weather for ${userName} not found.`);
            return;
          }
          if (res.statusCode != 200) {
            console.log(`Data not found. Status code: ${res.statusCode}`);
            return;
          }
          const weatherInfo = JSON.parse(body);
          console.log(weatherInfo);
        }
      )
    }
  }
);
=======
// const request = require("request");
// const argv = require("yargs").argv;

// const id = argv.id;
// const url = `https://jsonplaceholder.typicode.com/users/${id}`;
// request(
//   url,
//   (err, res, body) => {
//     if (res.statusCode != 200) {
//       console.log(
//         `Data not found. Status code: ${res.statusCode}`
//       );
//       return;
//     }
//     if (res.statusCode === 200) {
      
//       const data = JSON.parse(body);
//       const userName = data.name;
//       const userLat = data.address.geo.lat;
//       const userLng = data.address.geo.lng;

//       console.log(userName);
//       console.log("Lat:", userLat);
//       console.log("Lng:", userLng);

//     const wetaherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${userLat}&lon=${userLng}`;

//     request(
//       wetaherUrl, 
//       (err, res, body) => {
//         if (err) {
//           console.log("Server connection error.");
//           return;
//         }

//         if (res.statusCode != 200) {
//           console.log(
//             `Data not found. Status code: ${res.statusCode}`
//           );
//           return;
//         }
//         const weatherInfo = JSON.parse(body);
//         console.log(weatherInfo);
//       }
//     )
//     }
//   }
// );

// 2 wersja z podziałem na części
// node app.js --id=3
const request = require('request');
const argv = require('yargs').argv;

const userId = argv.id;

const getUser = (id, callback) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const user = JSON.parse(body);
            callback(user);
        } else {
            console.log('User not found');
        }
    });
}

const getWeather = (lat, lng, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const data = JSON.parse(body);
            callback(data);
        } else {
            console.log('Weather not found');
        }
    });
}

getUser(userId, (user) => {
    let userLat = user.address.geo.lat;
    let userLng = user.address.geo.lat;
    
    console.log(user.name);
    console.log(`lat: ${userLat}`);
    console.log(`lng: ${userLng}`);
    getWeather(userLat, userLng, (weather) => {
        console.log(weather.main.temp);
    });
});
>>>>>>> 2f06c13dd48b801e9fed5798e0b3fa5655be644b
