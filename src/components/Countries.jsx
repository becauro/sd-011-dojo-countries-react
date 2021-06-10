import React, { Component } from 'react';
import { fetchCountries } from '../services/countries';

export default class Countries extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    fetchCountries().then((countries) =>
      this.setState({
        countries: countries.map(({ translations: { br } }) => br),
      })
    );
  }

  render() {
    console.log(this.state.countries);
    return (
      <div>
        {this.state.countries.map((country) => (
          <p key={country}>{country}</p>
        ))}
      </div>
    );
  }
}
