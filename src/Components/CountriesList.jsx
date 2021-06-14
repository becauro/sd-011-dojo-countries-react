import React, { Component } from 'react';
import { fetchCountries } from '../services/countries';

export default class CountriesList extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      countries: [],
    }
    this.catchCountries = this.catchCountries.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
    this.filteredCountries = this.filteredCountries.bind(this);
  }

  componentDidMount(){
    this.catchCountries();
  }

  catchCountries() {
    fetchCountries().then(response => {
      this.setState({
        countries: response,
      })
    }) 
  }

  handleChanges({ target }) {
    this.setState({
      searchText: target.value,
    })
  }

  filteredCountries () {
    const { searchText, countries } = this.state;
    return  countries.filter((country) => ( 
      (country.translations.br.includes(searchText))
    )) 
  }

  render() {
    const { searchText } = this.state;
    const filteredCountries = this.filteredCountries();
    return (
      <div>
        <label>Digite um país
          <input value={searchText} onChange={ this.handleChanges } />
        </label>
        <ul>
        { filteredCountries.map(({ capital, flag, translations: { br } }) => (
          <li key={ br }>
            <p>{ br }</p>
            <p>{ capital } </p>
            <img className="flag" src={flag} alt={br} />
          </li>
        ))}
        </ul>
      </div>
    );
  }
}