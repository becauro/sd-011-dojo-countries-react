import React, { Component } from 'react';
import { fetchCountries } from './services/countries';

export default class RenderList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      countryList: [],
    }
  }

  

  renderMapList(array) {
    return array.map(({ translations: { br }, flag }, index ) => {
      <div>
        <p>{ br }</p>
        <img src={ flag } /> 
      </div>
    });
  }

  async componentDidMount() {
    const data = await fetchCountries();
    console.log(data);
    const { translations: { br }, flag } = data;
    
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
