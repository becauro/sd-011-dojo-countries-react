import React from 'react';
import { fetchCountries } from './services/Countries';
import CountriesList from './services/CountriesList';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.getCountries = this.getCountries.bind(this);
  }

  componentDidMount() {
    console.log(this.getCountries());
  }

  async getCountries() {
    return await fetchCountries();  
  }

  render() {
    return (
      <main>
        <h1>Lista de países</h1>
        <ul>

        </ul>
      </main>
    )
  }
}

export default App;
