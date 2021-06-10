import React from 'react';
import './App.css';
import Paises from './Paises'

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Lista de países </h1>
        <Paises />
      </main>
    )
  }
}

export default App;
