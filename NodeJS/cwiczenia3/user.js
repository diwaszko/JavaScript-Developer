const request = require("request");
const weather = require("./weather.js");

function getUserInfo(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    request(
      url,
      (err, res, body) => {
        if (res.statusCode === 404) {
          console.log(`User not found.`);
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
          
          weather.getUserWeather(data, userLat, userLng);
        }
  });
}

module.exports = { getUserInfo };

