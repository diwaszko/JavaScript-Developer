// instalacja biblioteki request:       npm install request
// wartość city dla miast kilkuczłonowych nie działa ze spacją, trzeba wpisać w np --city="Tomaszow Mazowiecki"

const request = require("request");
const argv = require("yargs").argv;

let city = argv.city.replace(/_/g, "%20");

request(
  `https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=${city}`,
  { json: true },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    console.log("Weather in", body.name, "is:\n", body);
    // console.log(body.weather[0].main);
    // console.log(body.wind.speed);
    console.log(city);
  }
);
