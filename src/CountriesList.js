import React from 'react';
import fetchAPI from './services/countries';

export default class CountriesList extends React.Component {
  constructor() {
    super()
    this.state = {
      countriesList: [],
    }
    this.handleFetchAPI = this.handleFetchAPI.bind(this);
  }

  componentDidMount() {
    const paises = fetchAPI()
  }

  async handleFetchAPI() {
    const paises = await fetchAPI()
    this.setState({ countriesList: paises[0] })
  }

  render() {
    const { countriesList } = this.state;

    return(
      <ul>
        { countriesList.map(country => (<li>{country.translations.br}</li>)  ) }
      </ul>
    );
  }
}