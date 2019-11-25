const request = require("request");
const argv = require("yargs").argv;

const id = argv.id;
const url = `https://jsonplaceholder.typicode.com/users/${id}`;
request(
  url,
  // { json: true },    // można tak oznaczyc jako json true (2 parametr)
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    const data = JSON.parse(body); // lub tak jako parsowanie
    console.log(data.name, "is here:\n", data.address.geo); // tutaj obiekt jest wypisany (nie jest to strigniem)
    console.log(`${data.name} is here:\n ${data.address.geo}`); // jeżeli obiekt jest parsowany do stringa zwroci zawsze Object object
  }
);

// w konsoli wywowłac program     node app4-5 --id=3
