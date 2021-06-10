import React from 'react';

class Licountrie extends React.Component {
render(){
  const { countrie } = this.props;
  return (
  <ul>
    <img src={ countrie.flag } />
    <li> {countrie.name} </li>


  </ul>
  )
    }
}

export default Licountrie;