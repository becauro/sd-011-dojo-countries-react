import React from 'react';
import './App.css';
import { fetchCountries } from './services/countries';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      countries: [],
      loading: true,
    }
  }

  async componentDidMount(){
    const countries = await fetchCountries()
    this.setState({
      countries: countries,
      loading: false,
    })
  console.log(this.state.countries);
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
