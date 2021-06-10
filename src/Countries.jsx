import React from 'react';
import { fetchCountries } from './services/countries';
import './Countries.css';

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
          { countries.map((country, index) => (
            <li key={ index }>
              <img src={ country.flag } alt={ `${country.translations.br} bandeira` } className="flag-image" />
              { country.translations.br }
            </li>

          )) 
          }
        </ul>
      </div>
    )
  }
}

export default Countries;
