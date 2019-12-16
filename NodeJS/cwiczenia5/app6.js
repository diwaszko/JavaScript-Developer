// 6. Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki axios
//    i pobierzmy użytkownika dane wykorzystując składnię async/await.

// Endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/2

const axios = require('axios');

(async (id) => {
    const response = await axios (`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log(response.data)
})(4);
