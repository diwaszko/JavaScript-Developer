const request = require("request");
const argv = require("yargs").argv;

const id = argv.id;
const url = `https://jsonplaceholder.typicode.com/users/${id}`;
request(
  url,
  (err, res, body) => {
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

        if (res.statusCode != 200) {
          console.log(
            `Data not found. Status code: ${res.statusCode}`
          );
          return;
        }
        const weatherInfo = JSON.parse(body);
        console.log(weatherInfo);
      }
    )
    }
  }
);