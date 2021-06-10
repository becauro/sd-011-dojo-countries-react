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
    const { countries } = this.state;

    return (
      <main>
        <h1>Lista de países</h1>
        <CountryList countries={ countries } />
      </main>
    )
  }
}

export default App;
