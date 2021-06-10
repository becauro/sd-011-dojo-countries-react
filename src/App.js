import React from 'react';
import './App.css';
import * as countries from './services/countries';

class App extends React.Component {
  async allCountries() {
    const apiCountries = await countries.fetchCountries();
    console.log(apiCountries);
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
