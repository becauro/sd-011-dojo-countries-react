import React from 'react';
import './App.css';
import ListaPaís from './ListaPaís'

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Lista de países</h1>
        <ListaPaís />
      </main>
    )
  }
}

export default App;
