import React from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import MoviesService from '../../services/movies.service'


const MovieDetailPage = () => {
    const { id } = useParams();
    const history = useHistory();

    const movies = MoviesService.getMovieById(id);

    if (!movies) {          // zabezpeczenie (jezeli id nie istnieje to przekierowuje do /movie)
        return <Redirect to="/movies" />
    }

    return (
        <div>
            <button onClick={history.goBack}>Powrót</button>
            <h2>MovieDetailPage</h2>

            <p><b>Title:</b> {movies.title}</p>
            <img alt="zdjęcie" src={movies.poster} />
            <p><b>Rating:</b> {movies.rating}</p>
            <p><b>Genre:</b> {movies.genre}</p>
            <p><b>Description:</b> {movies.description}</p>

        </div>
    );
};

export default MovieDetailPage;