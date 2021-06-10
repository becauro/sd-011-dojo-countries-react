import React, { Component } from 'react'
import  { fetchCountries } from '../services/countries'

export default class CountriesList extends Component {

    constructor() {
      super();
      this.state = {
        countries: [],
      };

      this.fetchAPICountries = this.fetchAPICountries.bind(this);
    }
  componentDidMount() {
    this.fetchAPICountries()
  }

  async fetchAPICountries(){
    const data = await fetchCountries();
    this.setState({
      countries: [...data],
    })
    // console.log(this.state.countries)
  }

  render() {
    const { countries } = this.state;

    return (
      <div>
        { countries.map((countrie) => <p>{countrie.translate.br}</p>)}
      </div>
    )
  }
}
