// Stwórzmy aplikację która pozwoli na zapisanie całego obiektu do pliku.
// W tym celu powinniśmy wykorzystać wbudowany moduł fs oraz funkcję pozwalającą na przekonwertowanie obiektu na postać tekstową(JSON.stringify).
// Obiekt do zapisu:

// const user = {
//     name: 'Jan',
//     lastName: 'Nowak'
// };
// Wynik zapisać do pliku user.json.

const fs = require("fs");

const user = {
  name: "Jan",
  lastName: "Nowak"
};
const userObject = JSON.stringify(user);

fs.writeFile("username-file.json", userObject, function() {
  console.log("Zapisano plik!");
});
