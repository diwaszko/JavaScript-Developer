// 9. Dodajmy do naszej aplikacji z zadania 7 pobieranie pogody dla naszego użytkownika (z odpowiedzi weźmy main.temp 
// i wyświetlmy na ekranie). Zadanie analogiczne jak w poprzednim laboratorium z wykorzystaniem składni async/await.

// Endpoint do pogody: https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={lat}&lon={lng}

const axios = require('axios');

const getUser = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}

const getWeather = async (lat, lng) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`);
    return response.data;
}

(async () => {
    try {
        const user = await getUser(2);
        const weather = await getWeather(user.address.geo.lat, user.address.geo.lng);
        console.log(user.name);
        console.log('Temperatura:', weather.main.temp);
    } catch (error) {
        console.log(error.name, error.message);
    }
})();