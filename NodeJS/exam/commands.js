const fs = require('fs');
const axios = require('axios');
const colors = require('colors');
let data = require('./data.json')



function showListAll() {
    console.log('All quotes:')
    data.forEach(element => {
        console.log(`${element.id}. ${element.quote.cyan} - ${element.author.brightBlue}`.green, `|`, `group - ${element.group}`.green);
    });
};

function addQuote(quote, author, group) {
    let id;

    if (data.length !== 0) {
        id = data[data.length - 1].id + 1;
    } else {
        id = 1;
    }
    if (quote == undefined) {
        throw new Error(`Quote has not been added. Please type quote text and author of quote. \nExample: node app add 'My Qoute' 'Author of Quote' 'Group of Quote'`.yellow);
    }
    else if (author == undefined) {
        throw new Error(`Quote has not been added. Please type author of quote. \nExample: node app add 'My Qoute' 'Author of Quote' 'Group of Quote'`.yellow);
    }
    let newRecord = {
        id,
        quote,
        author,
        counter: 0,
        group
    }
    if (group == undefined) {
        newRecord.group = 'unset';
    }
    data.push(newRecord);
    let dataStringified = JSON.stringify(data);
    fs.writeFile("./data.json", dataStringified, function () {
        console.log('A list has been updated by new quote!'.green);
    });
};


function deleteQuote(id) {
    let idToDelete = data.findIndex(x => x.id == id);

    if (id == undefined) {
        throw new Error(`Please type ID number of quote to delete it. Example: node app delete 5`.red);
    }
    else if (idToDelete === -1) {
        throw new Error(`Qoute with ID: ${id} not exist.`.red);
    }
    data.splice(idToDelete, 1);
    let dataStringified = JSON.stringify(data);

    fs.writeFile("./data.json", dataStringified, function () {
        console.log(`ID: ${id} quote has been deleted.`.green);
    });
};

function randomQuote() {
    const randomId = data.length * Math.random() << 0;
    let countTimes = ++data[randomId].counter

    console.log(`${data[randomId].id}. ${data[randomId].quote.cyan} - ${data[randomId].author.brightBlue}`.green);

    let dataStringified = JSON.stringify(data);

    fs.writeFile("./data.json", dataStringified, function () {
        console.log(`That quote has been randomized`, `${countTimes} times.`.green);
    });
};

function listQuoteByGroup(group) {
    const uniqueQuotesGroups = [...new Set(data.map(val => val.group))];
    const isGroupExist = uniqueQuotesGroups.some(val => val == group);

    if (group == undefined) {
        console.log(`Type which one group you want to show. Avaliable groups are:`.yellow, uniqueQuotesGroups)
    } else if (isGroupExist) {
        console.log(`All quotes of group "${group}":`.green)
        data.forEach((quote) => {
            if (quote.group == group) {
                console.log(`${quote.id}. ${quote.quote.cyan} - ${quote.author.brightBlue}`.green);
            }
        })
    } else {
        console.log(`Not found group ${group} in database please use available groups:`.yellow, uniqueQuotesGroups);
    }
};

function addGroup(id, newGroup) {
    let idToChangeGroup = data.findIndex(x => x.id == id);

    if (newGroup == undefined) {
        throw new Error(`To add group to existing quote please type name of group after ID Number. Example: node app addgroup 3 'my group name'`.yellow);
    }
    else if (idToChangeGroup === -1) {
        throw new Error(`Qoute with ID: ${id} not exist. To check available ID numbers type: node app list`.yellow);
    }

    data[idToChangeGroup].group = newGroup;

    let dataStringified = JSON.stringify(data);

    fs.writeFile("./data.json", dataStringified, function () {
        console.log(`ID: ${id} quote has been updated by new group ${newGroup}.`.green);
    });
};

async function randomQuoteFromInternet() {
    try {
        const response = await axios.get(`http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php`);
        const newQuote = response.data.quote;
        const newAuthor = response.data.author;

        console.log(`New random quote: \n${newQuote.cyan} - ${newAuthor.brightBlue}`.green);
        addQuote(newQuote, newAuthor);
    } catch (error) {
        console.log(error.message);
    }
};


module.exports = {
    showListAll,
    addQuote,
    deleteQuote,
    randomQuote,
    listQuoteByGroup,
    addGroup,
    randomQuoteFromInternet
};