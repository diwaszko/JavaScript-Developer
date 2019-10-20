// Zadanie 8 i 9

const name = process.argv[2];                   // 0 index to ścieżka relatywna, a 1 index to ścieżka app4.js dlatego index 2 (bo dodanie tam słówko Daniel lub cokolwiek)
let resultName;

if (name){
    resultName = console.log('Witaj: ' + name);
}
else{
    resultName = console.log('Witaj nieznajomy');
}

const fs = require('fs');
fs.writeFileSync('powitanie.txt', resultName);  

// po wpisaniu w konsoli:   node app4.js Daniel
// wyświetli nam powitanie Daniela
// po wpisaniu w konsoli:   node app4.js 
// wyświetli powitanie nieznajomego