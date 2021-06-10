import React from 'react';
import './App.css';
import * as Countries from './services/countries';

class App extends React.Component {
  componentDidMount() {
    this.fetchCountries();
  }
  async fetchCountries() {
    const requestCountries = await Countries.fetchCountries();
    console.log(requestCountries);
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
