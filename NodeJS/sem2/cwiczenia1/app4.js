// 4. Stwórzmy aplikację która pobierając 2 parametry a i b z adresu url wykona mnożenie w naszej aplikacji.
// Rezultat działania powinniśmy wysłać do użytkownika końcowego(klienta).


const express = require('express');
const app = express();

app.get('/:numOne/:numTwo', function (req, res) {
    const { numOne, numTwo } = req.params;
    const result = numOne * numTwo;
    res.send(200, result);
})

app.listen(4700, () => {
    console.log('działa');
});

// instalacja npm install express
// zmiana parametru w adresie get
