import React, { Component } from 'react';
import { fetchCountries } from '../services/countries';

export default class CountriesList extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    }
    this.catchCountries = this.catchCountries.bind(this);
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
  render() {
    const { countries } = this.state;
    return (
      <div>
        <ul>
        {countries.map(({ flag, translations: { br } }) => (
          <li>
            <img className="flag" src={flag} alt={br} />
          </li>
        ))}
        </ul>
      </div>
    );
  }
}
