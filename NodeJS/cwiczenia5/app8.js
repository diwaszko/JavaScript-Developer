// 8. Wykorzystując składnię async/await zmodyfikujmy zadanie 8 tak, aby pobrać kilku użytkowników w tej samej chwili 
//    wykorzystując Promise.all(). Wyświetlmy ich imiona w konsoli. (id użytkowników: 2, 3, 5, 7).

const axios = require('axios');

(async (users) => {
    try {
        const usersList = users.map( async (id) => {
             const userId = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
             if (userId.status === 404){
                console.log(this.userId, userId.status);
             }
             return userId.data.name
        });
        console.log(await Promise.all(usersList));
    }
    catch(error){
        if(error.response.status === 404){
            console.log(error.message, 'for:', error.request.res.responseUrl);
        }else{
            console.log(error.message);
        }
    }
})([2,3,5,7]);
