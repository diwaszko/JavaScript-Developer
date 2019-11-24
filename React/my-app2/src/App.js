import React from "react";
import PostMovie from "./components/PostMovie";
import movies from "./movies.json";
import "./index.css";

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

function App() {
  return (
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

    // <div>
    //   <PostMovie
    //     title="Joker"
    //     poster="https://picsum.photos/400?random"
    //     description="Lorem ipsum dolor"
    //   />
    // </div>
  );
}

export default App;
