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
    this.setState({
      countries: countries.name
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        Translations
      </div>
    )
  }
}

export default TranslationsCountries