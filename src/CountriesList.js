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
      <div>
        <ul>
          countries.map((countrie) => {
            <Licountrie  countrie= {countrie.name}/>
          }
                
        </ul>
          

      </div>
    )

  }
}

export default CountriesList;