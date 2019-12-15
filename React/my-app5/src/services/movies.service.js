import movies from '../mocks/movies'; // dane z jsona (jeżeli mamy service dostępny to zczytujemy dane z serivce)

class MoviesService {
  static getMovies() {
    return movies;
  }

  static getMovieById(id) {
    return movies.find(movie => movie.id === id);
  }
}

export default MoviesService;
