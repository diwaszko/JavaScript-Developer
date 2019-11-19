const welcomeDelay = require("./message");
const os = require("os");
const fs = require("fs");
let user = os.userInfo();

setTimeout(function() {
  fs.writeFile(
    "welcome-user.txt",
    welcomeDelay.welcomeMessage(user.username),
    function() {
      console.log("Zapisano plik!");
    }
  );
}, 5000);
