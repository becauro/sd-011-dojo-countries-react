import React from 'react';
import './App.css';
import Countries from './services/countries';


class App extends React.Component {
  constructor() {
    super()

    this.state{
      countries: [],
    }
  }

  componentDidMount(){
    this.fetchCountries()
    console.log(fetchCountries())
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
