// 7. Dodajmy do naszego zadania 6 obsługę błędów try..catch.

const axios = require('axios');


(async (id) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            console.log(response.data)
        }
        catch(error){
            console.log(error.message);
        }
})(4);
