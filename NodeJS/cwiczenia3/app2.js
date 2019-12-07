// 2. Rozszerzmy aplikację z zadania 1 o wprowadzanie dynamiczne danych które chcemy zapisać do pliku. 
// W zadaniu tym może być pomocny zewnętrzny moduł yargs.
// Przykład uruchomienia aplikacji:
// node app.js --name=Adam --lastName=Mickiewicz
// Wprowadzane dane powinny być zapisane do pliku.

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
