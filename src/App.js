import React from 'react';
import './App.css';
import apiCountries from './services/countries';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      countryList: [],
    };

    this.getCountry = this.getCountry.bind(this);
  }

  componentDidMount() {
    this.getCountry();
  }

  async getCountry() {
    const country = await apiCountries.fetchCountries();
    this.setState({
      countryList: country,
    });
  }

  render() {
    const { countryList } = this.state;
    console.log(countryList);
    return (
      <main>
        <h1>Lista de países</h1>
      </main>
    )
  }
}

export default App;
