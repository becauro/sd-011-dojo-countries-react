import React from 'react';
import './App.css';
import apiCountries from './services/countries';

class App extends React.Component {
  async getCountry() {
    const country = await apiCountries.fetchCountries();
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
