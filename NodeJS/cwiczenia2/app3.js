
const _ = require('lodash');                            // import pakietu lodash (posiada dodatkowe gotowe funkcje)

const tabA = ['ala', 'ma', 'kota'];
const tabB = ['ala', 'ma', 'psa'];

console.log(_.differenceWith(tabA, tabB, _.isEqual));       // w lodash dobra praktyka jest stosowanie _ jako zmiennej zachowujacej funkcje
console.log(_.differenceWith(tabB, tabA, _.isEqual));

console.log(_.difference(tabA, tabB));
console.log(_.difference(tabB, tabA));

