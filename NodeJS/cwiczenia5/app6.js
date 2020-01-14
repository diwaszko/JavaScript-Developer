// 6. Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki axios
//    i pobierzmy użytkownika dane wykorzystując składnię async/await.

// Endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/2

const axios = require('axios');

(async (id) => {
    const response = await axios(`https://jsonplaceholder.typicode.com/users/${id}`); // axios deafultowo jest jako get (ale moze byc tez post itp)
    // const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`); // bezposrednio z get to samo co wyzej
    console.log(response.data)
})(4);
