import React from 'react';
import { fetchCountries } from './services/countries';
import CountryList from './components/CountryList';
import Searchbox from './components/Searchbox';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      searchField: '',
    }
  }

  async getCountries() {
    const countries = await fetchCountries();
    this.setState({
      countries,
    })
  }
  
  componentDidMount() {
    this.getCountries();
  }

  render() {
    const { countries, searchField } = this.state;
    const filteredCountries = countries.filter(country => (
      country.translations.br.toLowerCase().includes(searchField.toLowerCase())
    ))

    return (
      <main>
        <h1>Lista de países</h1>
        <Searchbox handleChange={(e) => this.setState({searchField: e.target.value})} />
        <CountryList countries={ filteredCountries } />
      </main>
    )
  }
}

export default App;
