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
    command: 'add',
    describe: `Adds a new quote to the database. Example: \nnode app add 'quote text' 'author of quote' 'group of quote'`.yellow,
    handler: async () => {
        try {
            await addQuote(process.argv[3], process.argv[4], process.argv[5]);
        } catch (error) {
            console.log(error.message);
        }
    }
};

const deleteQuoteCommand = {
    command: 'delete',
    aliases: ['remove', 'erase'],
    describe: 'Deleting a quote with selected ID from the database. Example: \nnode app delete 5'.red,
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
    command: 'grouplist',
    aliases: ['group', 'listgroup', 'showgroup'],
    describe: `Shows quotes by filtered group. Example: \nnode app group 'group name'`.green,
    handler: async () => {
        try {
            await listQuoteByGroup(process.argv[3]);
        } catch (error) {
            console.log(error.message);
        }
    }
};

const addGroupCommand = {
    command: 'addgroup',
    describe: `Adding a group to quote by id number. Example: \nnode app addgroup 5 'my group name'`.yellow,
    handler: async () => {
        try {
            await addGroup(process.argv[3], process.argv[4]);
        } catch (error) {
            console.log(error.message);
        }
    }
};

const randomQuoteFromInternetCommand = {
    command: 'newrandom',
    aliases: ['randomnew', 'newquote'],
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