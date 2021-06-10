import React from 'react';
import { fetchCountries } from './services/countries';
import CountryList from './components/CountryList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filterCountry: '',
      countries: [],
    }

    this.changeFilterCountry = this.changeFilterCountry.bind(this);
  }

  async getCountries() {
    const countries = await fetchCountries();
    this.setState({
      countries,
    })
  }

  changeFilterCountry(e) {
    const filterCountry = e.target.value
    this.setState((prevState) => {
      const filteredCountries = prevState.countries.filter(({ translations: { br } }) => br.includes(filterCountry))
      return {
        filterCountry,
        countries: filteredCountries
      }
    })
  }
  
  componentDidMount() {
    this.getCountries();
  }

  render() {
    const { countries, filterCountry } = this.state;

    return (
      <main>
        <h1>Lista de países</h1>
        <input
          value={filterCountry}
          onChange={this.changeFilterCountry}
        />



        <CountryList countries={ countries } />
      </main>
    )
  }
}

export default App;
