import React from 'react';
import PropTypes, { objectOf } from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card" className="container mt-4 border border-secondary shadow">
        <img alt="Movie Cover" className="img-fluid" src={imagePath} height="300px" />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Link className="btn btn-primary mb-1" to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.arrayOf(objectOf).isRequired };

export default MovieCard;
