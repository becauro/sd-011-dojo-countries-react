import React, { Component } from 'react'
import  { fetchCountries } from '../services/countries'

export default class CountriesList extends Component {

    constructor() {
      super();
      this.state = {
        countries: [],
      };

    }
  componentDidMount {
    this.setState({
      countries: 
    });
    fetchCountries()
  }

  render() {
    return (
      <div>
        {console.log(fetchCountries())}
      </div>
    )
  }
}
