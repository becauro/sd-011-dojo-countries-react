import React from 'react';
import { fetchCountries } from './components/CountriesList';

class CountriesList extends React.Component {

  render() {
    { console.log(fetchCountries()); }
    return ();
  }
}

export default CountriesList;
