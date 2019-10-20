const name = 'Daniel';
const lastName = 'Iwaszko';

module.exports.name = name;                  // 1 sposób         module.exports powinno być na końcu
module.exports.lastName = lastName;                     


// module.exports = {                            // 2 sposób        module.exports powinno być na końcu
//     name: name,
//     lastName: lastName
// }