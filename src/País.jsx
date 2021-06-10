import React, { Component } from 'react';
import './App.css';

class País extends Component {

  render() {
    const { pais, flag } = this.props;
    return (
      <li>
        {pais}
        <img className="flagWidth" src={flag} alt={pais}></img>
      </li>
    );
  }
}

export default País;
