import fetchCountries from './services/countries';

import React from 'react';

class Paises extends React.Component {
  constructor() {
    super()
    this.state = { countries: [] }  
  }

  async componentDidMount() {
    const paises = await fetchCountries()
    this.setState({  
      countries: paises,
    })
  }

  render() {
    const { countries } = this.state;

    console.log(countries);
    return (
      <ul>
        {
          <h1>Olá mundo</h1>
        }
      </ul>
    );
  }
}

export default Paises;
