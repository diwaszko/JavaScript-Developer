const request = require("request");
const fs = require("fs");

function getUserWeather(data) {
  const wetaherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${userLat}&lon=${userLng}`;

  request(
    wetaherUrl, 
    (err, res, body) => {
      if (err) {
        console.log("Server connection error.");
        return;
      }

      if (res.statusCode != 200) {
        console.log(
          `Data not found. Status code: ${res.statusCode}`
        );
        return;
      }
      const weatherInfo = JSON.parse(body);
  
      console.log(weatherInfo.main.temp);
  
      const dataToSave = { user: data.name, temp: weatherInfo.main.temp };
      console.log(dataToSave);
  
      fs.writeFile("./data_weather.json", JSON.stringify(dataToSave), error => {
        if (error) {
          console.log(error.message);
          return;
        }
  
        console.log("File saved!");
      });
    });
  }
  
  module.exports = { getUserWeather };
