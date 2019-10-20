const os = require('os');
const fs = require('fs');

let user = os.userInfo();                   // pobiera informacje o uzytkowniku systemu

console.log(user.username)
fs.writeFileSync('zalogowany-uzytkownik.txt', user.username);   // zapisje w pliku nazwę użytkownika odwołując się do właściwości (property) username w obiekcie os.userInfo() w zmiennej user
