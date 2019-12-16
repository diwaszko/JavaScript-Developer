// 10. Stwórzmy aplikację która pobierze informację o użytkowniku i statystykach jego postów i komentarzy.
// Z pobranego użytkownika wyświetlmy na ekranie nazwę użytkownika oraz email.
// Pobierzmy wszystkie posty użytkownika i wyświetlmy ich ilość w konsoli.
// Dodatkowo sprawdźmy aktywność szukanego użytkownika w komentarzach i wyświetlmy łączną ilość komentarzy w konsoli.
// Endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/2

// Endpoint do postów: https://jsonplaceholder.typicode.com/posts?userId=2

// Endpoint do komentarzy: https://jsonplaceholder.typicode.com/comments?postId=11

const axios = require('axios');

const getUser = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}

const getPosts = async (userId) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return response.data;
}

const getComments = async (postId) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    return response.data;
}

(async () => {
    try {
        const user = await getUser(5);
        console.log(user.username, user.email);

        const posts = await getPosts(user.id);
        console.log('Posts:', posts.length);
        
        const countedPromises = posts.map((post)=>getComments(post.id))
        const comments = await Promise.all(countedPromises);
        // console.log(comments);
        const countComments = comments.reduce((acc, curr) => acc + curr.length, 0);
        console.log('Coments:', countComments);

    } catch (error) {
        console.log(error.message);
    }
})();