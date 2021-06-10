import React from 'react';
import fetchCountries from './services/countries';

class TranslationsCountries extends React.Component {
  constructor(){
    super()
    this.state ={
      countries: [],
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
    this.setState( {
      countries: paises,
    })
    console.log(this.state)
  }

  render() {
    const { countries } = this.state;
    return (
      <div>
        <ol>
          { countries.map((pais) => <li>{ pais }</li>) }
        </ol>
      </div>
    )
  }
}

export default TranslationsCountries