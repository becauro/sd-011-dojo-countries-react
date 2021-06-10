import React from 'react';
import fetchAPI from './services/countries';

export default class CountriesList extends React.Component {
  constructor() {
    super()
    this.state = {
      countriesList: [],
    }
  }

  componentDidMount() {
    const países = fetchAPI()
  }

  handleFetchAPI() {
    
  }

  render() {
    return(
      <ul>
        
      </ul>
    );
  }
}