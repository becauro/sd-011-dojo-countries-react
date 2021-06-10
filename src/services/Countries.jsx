import React from 'react';
import { fetchCountries } from './services/countries'

class Countries extends React.Component {
  constructor() {
    super();
    
    this.state = {
      countries: [],
    }
    this.fetchCountries = this.fetchCountries.bind(this);
  }
  
  fetchCountries() {
    fetch('https://restcountries.eu/rest/v2/all').then(res => res.json());
  }

  componentDidMount() {
    
  }



  render() {
    const countries = this.fetchCountries();
    return (
      <main>
        <h1>{ countries }</h1>
      </main>
    )
  }
}

export default Countries;
