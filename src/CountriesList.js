import React from 'react';
import CountriesList from './services/countries';

class CountriesList extends React.Component {
  constructor(){
    super()
    this.state({
      countries: [],
    })
  }

  componentDidMount(){
    this.createCountriesList();
  }

  async createCountriesList(){
    const countries = await CountriesList()
    this.setState({
      countries,
    })
  }

  render(){
    const { countries } = this.state
    return (
      <div>
          {countries.map((countrie) => {
            <Licountrie  countrie= {countrie}/>
          })
        }
          
          

      </div>
    )

  }
}

export default CountriesList;