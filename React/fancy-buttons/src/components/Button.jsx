import React from 'react';

class Buttons extends React.Component {
    constructor() {
        super()
    this.handleClick1 = this.handleClick.bind(this)
    this.state = {
        clicks: 0
    }
    }
  
  handleClick = (e) => {
      this.setState((prevState, props) => ({
          clicks: prevState.clicks + 1
      }))
      if(this.state.clicks % 2 !== 0) {
          e.target.className = 'green';
      } else {
        e.target.className = ''
      }
  }
  
  
  render() {
    return(
      <button onClick={this.handleClick}>{this.state.clicks}</button>
    )}
}

export default Buttons;