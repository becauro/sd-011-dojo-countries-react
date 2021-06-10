import React, { Component } from 'react';

class Countries extends Component {
  constructor() {
    super();
    
    this.state = {
      countries: [],
    }
    this.fetchCountries = this.fetchCountries.bind(this);
  }

  componentDidMount() {
    this.fetchCountries();
  }

  fetchCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      this.setState({
        countries: data,
      })
    });
  }

  render() {
    const { countries } = this.state;
    return (
      <main>
        { countries.map(({ translations, flag }) => (
          <div>
            <p>{translations.br}</p>
            <img src={flag} style={{width:"250px"}} />
          </div>
        )) 
        }
      </main>
    )
  }
}

export default Countries;
