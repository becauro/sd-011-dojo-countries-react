import React, { Component } from 'react';
import { fetchCountries } from './services/countries';

export default class RenderList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      countryList: [],
    }
  }

  async componentDidMount() {
    const data = await fetchCountries();
    console.log(data);
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
