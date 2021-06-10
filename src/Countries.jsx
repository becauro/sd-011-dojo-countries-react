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
    const { countries } = this.state;

    return (
      <div>
        <h1>Countries</h1>
        <ul>
          { countries.map((country, index) => <li key={ index }>{ country.translations.br }</li>) }
        </ul>
      </div>
    )
  }
}

export default Countries;
