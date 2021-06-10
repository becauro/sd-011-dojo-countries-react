import React, { Component } from 'react';
import './App.css';

class País extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

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
