import React, { Component } from 'react';
import { fetchCountries } from '../services/countries';

export default class CountriesList extends Component {
  constructor() {
    super();
    this.state = {
      filteredInput: "",
      countries: [],
    }
    this.catchCountries = this.catchCountries.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
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
      filteredInput: target.value,
    })

  }

  render() {
    const { countries, filteredInput } = this.state;
    return (
      <div>
        <label>Digite um país
          <input value={filteredInput} onChange={ this.handleChanges } />
        </label>
        <ul>
        {countries.map(({ flag, translations: { br } }) => (
          <li key={ br }>
            <p>{ br }</p>
            <img className="flag" src={flag} alt={br} />
          </li>
        ))}
        </ul>
      </div>
    );
  }
}
