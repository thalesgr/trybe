import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="container loading">
        <span className="align-middle loadtext">Carregando...</span>
      </div>
    );
  }
}

export default Loading;
