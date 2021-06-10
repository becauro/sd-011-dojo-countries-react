import React from 'react';
import { fetchCountries } from '../services/countries';

class CountriesList extends React.Component {
  constructor() {
    super();

    this.state = {
      countries: data,
    }
  }

  render() {
    const countrie = fetchCountries();
    console.log(countrie.then(data => {countries: data} );
    return (
      <h1>Hello World</h1>
    );
  }
}

export default CountriesList;
