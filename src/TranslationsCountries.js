import React from 'react';
import fetchCountries from './services/countries';

class TranslationsCountries extends React.Component {
  constructor(){
    super()
    this.state ={
      countries: [],
      flags: [],
    }
    this.getCountries = this.getCountries.bind(this)
  }

  componentDidMount(){
    this.getCountries()
  }

  async getCountries(){
    const countries = await fetchCountries()
    
    const paises = countries.map((country) => country.translations.br);
    console.log(paises);
    const flags = countries.map((country) => country.flag);
    this.setState( {
      countries: paises,
      flags: flags,
    })
    console.log(this.state)
  }

  render() {
    const { countries, flags } = this.state;
    return (
      <div>
        <ol>
          { countries.map((pais, index) => <li>{ pais } { flags[index]}</li>) }
        </ol>
      </div>
    )
  }
}

export default TranslationsCountries