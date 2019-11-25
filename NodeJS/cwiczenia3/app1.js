const fs = require("fs");

const user = {
  name: "Jan",
  lastName: "Nowak"
};
const userObject = JSON.stringify(user);

fs.writeFile("username-file.json", userObject, function() {
  console.log("Zapisano plik!");
});
