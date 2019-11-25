const fs = require("fs");
const argv = require("yargs").argv;

const newUser = {
  name: argv.name,
  lastName: argv.lastName
};

const userObject = JSON.stringify(newUser);

fs.writeFile("username-file.json", userObject, function() {
  console.log("Nadpisano plik!");
});
