const user = require("./user.js");
const argv = require("yargs").argv;

const id = argv.id;

user.getUserInfo(id);