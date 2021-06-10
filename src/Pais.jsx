import React from 'react';

class Pais extends React.Component {
  render(){
    const { pais, bandeira } = this.props;
    return( 
      <div>
        <strong> { pais } </strong>
        <img src={ bandeira } alt={ pais } />
      </div>
    )
  }
}

export default Pais;