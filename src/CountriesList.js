import React from 'react';
import CountriesList from './services/countries';

class CountriesList extends React.Component {
  constructor(){
    super()
    this.state({

    })
  }

  componentDidMount(){

  }

  async createCountriesList(){
    const countries = await CountriesList()

  }

  render(){
    return (
      
    )

  }
}

export default CountriesList;