import React from 'react';
import './App.css';
import Countries from './components/Countries';
// Começando projeto.

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Lista de países</h1>
        <Countries />
      </main>
    );
  }
}

export default App;
