import React from 'react';
import CountriesList from './services/countries';

class CountriesList extends React.Component {
  constructor(){
    super()
    this.state({

    })
  }

  componentDidMount(){
    this.createCountriesList();
  }

  async createCountriesList(){
    const countries = await CountriesList()

  }

  render(){
    return (
      <div>
          {countries.map((countrie) => {
            <Licountrie  countrie= {countrie.name}/>
          }}
                
          

      </div>
    )

  }
}

export default CountriesList;