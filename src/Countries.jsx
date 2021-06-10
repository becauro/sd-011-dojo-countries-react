import React from 'react';
import { fetchCountries } from './services/countries';

class Countries extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    }
  }

  componentDidMount() {
    this.fetchAllCountries();
  }

  async fetchAllCountries() {
    const countriesList = await fetchCountries();
    this.setState({
      countries: countriesList,
    })
  }

  render() {
    return (
      <h1>Countries</h1>
    )
  }
}

export default Countries;
