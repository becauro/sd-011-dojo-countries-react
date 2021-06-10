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
    console.log(this.state.countries);
  }

  fetchAPICountries(){
    const data = fetchCountries();
    this.setState({
      countries: [data],
    })
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}
