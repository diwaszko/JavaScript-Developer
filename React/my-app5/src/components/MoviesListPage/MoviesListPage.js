import React from 'react';
import { Link } from 'react-router-dom';
import MoviesService from '../../services/movies.service'

const movies = MoviesService.getMovies();

const MoviesListPage = () => {
    return (
        <div>
            <h2>MoviesListPage</h2>
            {movies.map(movie => (
                <p key={movie.id}>
                    <Link to={`/movie-detail/${movie.id}`}>{movie.title}</Link>
                </p>
            ))}
        </div>
    );
};

export default MoviesListPage;