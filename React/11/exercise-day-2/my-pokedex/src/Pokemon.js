import React from 'react';

class Pokemon extends React.Component {
  render() {
      const {id, name, type, averageWeight, image, moreInfo} = this.props;
      return (
          <div className="pokemon">
              <div>
              <p>ID: {id}</p>
              <p>Name: {name}</p>
              <p>Type: {type}</p>
              <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
              <p>More Info: <a href={moreInfo} target='_blank'>About {name}</a></p>
              </div>
              <div>
              <img src={image} alt={name + 'PIC'}></img>
              </div>
          </div>
      );
  };
};

export default Pokemon;