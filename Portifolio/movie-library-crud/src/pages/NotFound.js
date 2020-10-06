import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return <div data-testid="404-error" className="container">
      <p className="notfound">Página não encontrada</p>
      <img src="https://i1.sndcdn.com/artworks-000534364746-7yhplh-t500x500.jpg"></img>
    </div>;
  }
}

export default NotFound;
