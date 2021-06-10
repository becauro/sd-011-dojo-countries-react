import React, { Component } from 'react';
import { fetchCountries } from '../services/countries';

export default class Countries extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    console.log(fetchCountries())
    const arrayOfCoutries = [];
    fetchCountries()
    .then(response => this.setState({
      countries: response.map((countrie) => arrayOfCoutries.push(countrie.translations.br))
    )}
  }


  render() {
    console.log(this.state.countries)
    return 
  }
}
