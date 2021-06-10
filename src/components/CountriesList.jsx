import React, { Component } from 'react'
import  { fetchCountries } from '../services/countries'

export default class CountriesList extends Component {
  render() {
    return (
      <div>
        {console.log(fetchCountries())}
      </div>
    )
  }
}
