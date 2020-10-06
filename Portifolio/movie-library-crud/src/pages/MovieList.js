import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      movies: [],
      loading: false,
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const movArray = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: movArray,
        });
      },
    );
  }


  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list" className="container">
        <h1>Movie Library CRUD</h1>
        {loading ? <Loading /> : movies
          .map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link className="btn btn-primary mt-4 float-right" to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
