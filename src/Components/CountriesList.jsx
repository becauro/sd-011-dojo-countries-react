import React, { Component } from 'react';
import { fetchCountries } from '../services/countries';

export default class CountriesList extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    }
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}
