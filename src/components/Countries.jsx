import React, { Component } from 'react';
import { fetchCountries } from '../services/countries';

export default class Countries extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log(fetchCountries())
    fetchCountries().then(r=>console.log(r))
  }

  render() {
    return <div></div>;
  }
}
