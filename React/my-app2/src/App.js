import React from "react";
import PostMovie from "./components/PostMovie";
// import movies from "./movies.json"; // do zadan z 2 weekndu
import movies from "./movies2.json"; // do zadan z 3 weekendu
import "./index.css";
import LanguageContext from "./components/LanguageContext";

const topMovies = movies.filter(movie => movie.rating > 6);
const badMovies = movies.filter(movie => movie.rating <= 6);
console.log(topMovies);

// 7 . zrobić metodą reduce !!!!
// const moviesByGenre =>{
//   if (Array.isArray(moviesByGenre[movies.genre])){
//     moviesByGenre[movies.genre] =[...moviesByGenre[movie.genre],movie]

//   }else{
//     moviesByGenre[movies.genre] = [movie];
//   }
// }

// function MovieLists(props) {
//   return props.movies.map(movie => (
//     <PostMovie
//       key={movie.id}
//       title={movie.title}
//       poster={movie.poster}
//       rating={movie.rating}
//       description={movie.description}
//     />
//   ));
// }

// const genres = Object.keys(moviesByGenre);

function App() {
  return (
    <LanguageContext.Provider value="en">
    <div>
      <div class="movie-lists">
        <h2>TOP MOVIES:</h2>
        {topMovies.map(movie => (
          <PostMovie
            // {...movie}   // można wypisać wszystkie elementy zamiast wypisywania elementów pod spodem
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            rating={movie.rating}
            description={movie.description}
          />
        ))}
      </div>
      <div class="movie-lists">
        <h2>BAD MOVIES:</h2>
        {badMovies.map(movie => (
          <PostMovie
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            rating={movie.rating}
            description={movie.description}
          />
        ))}
      </div>
      
    </div>
    </LanguageContext.Provider>


  );
}

export default App;
