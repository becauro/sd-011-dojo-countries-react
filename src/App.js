import React from 'react';
import './App.css';
import Countries from './services/countries';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      countries: [],
    }
  }

  createFetch = () => {
    return fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(result => console.log(result))
      
  }
    
    componentDidMount() {
    console.log(this.createFetch())
    // this.fetchCountries()
    // console.log(fetchCountries())
  }

  render() {
    return (
      <main>
        <h1>Lista de países</h1>
      </main>
    )
  }
}

export default App;
