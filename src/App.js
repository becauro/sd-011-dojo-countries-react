import React from 'react';
import './App.css';
import Countries from './Countries';
import { fetchCountries } from './services/countries';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    }
  }

  componentDidMount() {
    this.fetchAllCountries();
  }

  async fetchAllCountries() {
    const countriesList = await fetchCountries();
    this.setState({
      countries: countriesList,
    })
  }

  render() {
    const { countries } = this.state;

    return (
      <main>
        <h1>Lista de países</h1>
        <label htmlFor="search" >
          Pesquise os países
          <input type="text" name="search" id="search"/>
        </label>
        <Countries countries={ countries }/>
      </main>
    )
  }
}

export default App;
