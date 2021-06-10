import React from 'react';
import { fetchCountries } from './services/countries';
import CountryList from './components/CountryList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      countries: [],
    }
  }

  async fetchCountries()
  
  componentDidMount() {

  }

  render() {
    return (
      <main>
        <h1>Lista de países</h1>
        <CountryList countries />
      </main>
    )
  }
}

export default App;
