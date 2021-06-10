import React, { Component } from 'react'

class País extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    const { pais } = this.props;
    return (
      <li>{ pais }</li>
    )      
    
  }
}

export default País;