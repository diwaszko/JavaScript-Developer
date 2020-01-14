const yargs = require('yargs');

const {
    showListAll,
    addQuote,
    deleteQuote,
    randomQuote,
    listQuoteByGroup,
    addGroup,
    randomQuoteFromInternet
} = require('./commands');


const showListAllCommand = {
    command: 'all',
    aliases: ['show', 'list'],
    describe: 'Shows a list of all quotes.'.green,
    handler: async () => {
        try {
            await showListAll();
        } catch (error) {
            console.log(error.message);
        }
    }
};

const addQuoteCommand = {
    command: 'add <quote> <author> [group]',
    aliases: ['a'],
    describe: `Adds a new quote to the database.`.yellow,
    handler: async () => {
        try {
            await addQuote(process.argv[3], process.argv[4], process.argv[5]);
        } catch (error) {
            console.log(error.message);
        }
    }
};

const deleteQuoteCommand = {
    command: 'delete <id>',
    aliases: ['remove', 'erase', 'd'],
    describe: 'Deleting a quote with selected ID from the database.'.red,
    handler: async () => {
        try {
            await deleteQuote(process.argv[3]);
        } catch (error) {
            console.log(error.message);
        }
    }
};

const randomQuoteCommand = {
    command: 'random',
    aliases: ['r'],
    describe: 'Random single quote from your list.'.brightBlue,
    handler: async () => {
        try {
            await randomQuote();
        } catch (error) {
            console.log(error.message);
        }
    }
};

const listQuoteByGroupCommand = {
    command: 'group [group name]',
    aliases: ['showgroup'],
    describe: `Shows quotes by filtered group.`.green,
    handler: async () => {
        try {
            await listQuoteByGroup(process.argv[3]);
        } catch (error) {
            console.log(error.message);
        }
    }
};

const addGroupCommand = {
    command: 'addgroup <id> <group name>',
    describe: `Adding a group to quote by id number.`.yellow,
    handler: async () => {
        try {
            await addGroup(process.argv[3], process.argv[4]);
        } catch (error) {
            console.log(error.message);
        }
    }
};

const randomQuoteFromInternetCommand = {
    command: 'addrandom',
    aliases: ['newquote', 'newrandom'],
    describe: 'Get new random quote from server and save it to your list.'.brightBlue,
    handler: async () => {
        try {
            await randomQuoteFromInternet();
        } catch (error) {
            console.log(error.message);
        }
    }
};

yargs
    .command(showListAllCommand)
    .command(addQuoteCommand)
    .command(deleteQuoteCommand)
    .command(randomQuoteCommand)
    .command(listQuoteByGroupCommand)
    .command(addGroupCommand)
    .command(randomQuoteFromInternetCommand)
    .argv