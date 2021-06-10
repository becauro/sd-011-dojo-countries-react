import React from 'react';
import './App.css';
import * as countries from './services/countries';

class App extends React.Component {
  componentDidMount() {
    const req = countries.fetchCountries()
    console.log(req)
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
