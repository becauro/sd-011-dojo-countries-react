import React from 'react';
import './App.css';
import Countries from './services/countries';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      countries: [],
    }
  }
  render() {
    return (
      <main>
        <h1>Lista de países</h1>
      </main>
    )
  }
}

export default App;
