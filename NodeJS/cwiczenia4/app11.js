// 11. Dodajmy do zadania 10 zapis do pliku listy pobranych zdjęć. Plik powinniśmy nazwać zgodnie z nazwą albumu. 
// Jeżeli nazwa albumu przekracza 10 znaków powinniśmy skrócić nazwę naszego pliku.



const axios = require('axios');
const fs = require("fs");
const util = require('util');
const argv = require('yargs').argv;

const id = argv.id;
const writeFile = util.promisify(fs.writeFile);

const getUser = (userId, callback) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(function (response) {
        callback(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("User promises done!");
    });
}

const getAlbum = (albumId, callback) => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${albumId}`)
    .then(function (response) {
        callback(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("Album promises done!");
    });
};

const getPhotosTitles = (photoId, callback) => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${photoId}`)
    .then( (response) => {
        callback(response.data);
    })
    .catch( (error) => {
        console.log(error);
    })
    .finally( () => {
        console.log("Photos titles promises done!");
    })
}

getUser(id, (userData) => {

    console.log('User Name:', userData.name);
    getAlbum(id, (album) => {
        const firstAlbumName = album[0].title;

        console.log('Number of albums:', Object.keys(album).length);
        console.log('Title of first album:', firstAlbumName);
        getPhotosTitles(id, (photos) => {
            let photoTitles = [];
            let shortTitle = firstAlbumName.substring(0,10);

            photos.forEach((val, idx) => photoTitles.push(photos[idx].title));
            console.log(photoTitles);
            
            writeFile(`./${shortTitle}.json`, JSON.stringify(photoTitles))
            .then( () => {
                console.log('File saved!');
            })
            .catch( error => {
                console.log('Error while saving:', error);
            })
        })
    });

});