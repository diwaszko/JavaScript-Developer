const fs = require("fs");
const argv = require("yargs").argv;

const newUser = {
  name: argv.name,
  lastName: argv.lastName
};

fs.readFile("username-file.json", "UTF-8", function(error, data) {
  const newData = JSON.parse(data);
  console.log(newData.name, newData.lastName);

  fs.writeFile("username-file.json", userObject, function() {
    console.log("Nadpisano plik!");
  });
});

const userObject = JSON.stringify(newUser);
