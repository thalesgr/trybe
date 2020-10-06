import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      loading: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState(
      { loading: true },
      async () => {
        const movieGot = await movieAPI.getMovie(this.props.match.params.id);
        this.setState({
          loading: false,
          movie: movieGot,
        });
      },
    );
  }


  renderMovie() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details" className="container mt-4 border border-secondary shadow">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link className="btn btn-primary mb-1 mr-2" to="/">VOLTAR</Link>
        <Link className="btn btn-primary mb-1 mr-2" to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link className="btn btn-danger mb-1 mr-2" to="/" onClick={() => movieAPI.deleteMovie(id)} >DELETAR</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return loading ? <Loading /> : this.renderMovie();
  }
}

export default MovieDetails;
