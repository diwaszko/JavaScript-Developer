const express = require('express');
const router = express.Router();


const calulateTax = (tax, amount) => {
    const resultTax = tax * amount / 100;
    return { tax: resultTax, amount: amount - resultTax };
}

router.post('/', function (req, res) {
    const { tax, amount } = req.body;
    const result = calulateTax(tax, amount);
    res.send(result);
})

module.exports = router;