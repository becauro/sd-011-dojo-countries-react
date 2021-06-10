import React from 'react';
import { fetchCountries }  from './services/countries';

class CountriesList extends React.Component {
  constructor() {
    super()
    this.state = {
      countriesList: [],
    }
    this.handleFetchAPI = this.handleFetchAPI.bind(this);
  }

  componentDidMount() {
    this.handleFetchAPI();
  }

  async handleFetchAPI() {
    const paises = await fetchCountries()
    this.setState({ countriesList: paises })
  }

  render() {
    const { countriesList } = this.state;

    return(
      <ul>
        { countriesList.map(country =>
          (<li key={country.name}>
            {country.translations.br}
            <img src={country.flag} width='45px' />
            </li>)  ) }
      </ul>
    );
  }
}

export default CountriesList;