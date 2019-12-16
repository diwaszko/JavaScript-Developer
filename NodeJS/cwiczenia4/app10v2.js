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

const getUser = (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return axios.get(url)
        .then(response => response.data);
}

const getAlbums = (id) => {
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;
    return axios.get(url)
        .then(response => response.data);
}

const getPhotos = (id) => {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
    return axios.get(url)
        .then(response => response.data);
}

getUser(2)
    .then(user => {
        console.log(user.name);
        return getAlbums(user.id);
    })
    .then(albums => {
        const [album] = albums;
        console.log(album.title);
        return getPhotos(album.id);
    })
    .then(photos => {
        photos.forEach(photo => console.log(photo.title));
    })
    .catch(error => {
        console.log(error);
    });