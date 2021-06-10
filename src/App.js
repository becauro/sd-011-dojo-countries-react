import React from 'react';
import './App.css';
import * as fetchCountries from './services/countries'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      loading: true,
    }
    this.getCountry = this.getCountry.bind(this)
  }

  async getCountry() {
    const fetch = await fetchCountries.fetchCountries()
    this.setState({
      countries: fetch,
      loading: false,
    })
  }

  componentDidMount() {
    this.getCountry();
  }

  render() {
    // fetchCountries.fetchCountries().then((variavel)=> console.log(variavel))
    console.log(this.state.countries)
    return (
      <main>
        <h1>Lista de países</h1>
        <ol>
          <li>{this.state.loading && this.state.countries[0][0].name}</li>
        </ol>
      </main>
    )
  }
}
 
export default App;
