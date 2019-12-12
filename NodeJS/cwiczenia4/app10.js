// 10. Stwórzmy aplikację która pobierze informacje o użytkowniku oraz jego pierwszym na liście albumie 
//   i przypisanych do niego zdjęciach.

// Z pobranego użytkownika wyświetlmy na ekranie nazwę użytkownika.
// Z pobranego albumu wyświetlmy ilość wszystkich albumów oraz nazwę pierwszego z nich.
// Z pobranych zdjęć wyświetlmy wszystkie tytuły.
// Lista adresów do API

// endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/1
// endpoint do albumów: https://jsonplaceholder.typicode.com/albums?userId=1
// endpoint do zdjęć: https://jsonplaceholder.typicode.com/photos?albumId=1
// Pamiętajmy również o tym aby obsłużyć błędy zapytania łapiąc występujący wyjątek (.catch())


const axios = require('axios');
const fs = require("fs");
const util = require('util');
const argv = require('yargs').argv;

const id = argv.id;

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

        console.log('Number of albums:', Object.keys(album).length);
        console.log('Title of first album:', album[0].title);
    });
    getPhotosTitles(id, (photos) => {
        photos.forEach((val, idx) => {
            console.log(idx+1, photos[idx].title);
        });
    })
});