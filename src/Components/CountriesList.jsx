import React, { Component } from 'react';
import { fetchCountries } from '../services/countries';

export default class CountriesList extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    }
  }

  componentDidMount(){
this.catchCountries();
  }
  
  catchCountries() {
    fetchCountries().then(response=>console.log(response)) 
    
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}
