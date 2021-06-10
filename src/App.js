import React from 'react';
import './App.css';
import * as fetchCountries from './services/countries'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    }
  }

  async getCountry() {
    const fetch = await fetchCountries.fetchCountries()
    const allCountries
  }
  render() {
    fetchCountries.fetchCountries().then((variavel)=> console.log(variavel))
    return (
      <main>
        <h1>Lista de países</h1>
        <ol>
          <li></li>
        </ol>
      </main>
    )
  }
}
 
export default App;
