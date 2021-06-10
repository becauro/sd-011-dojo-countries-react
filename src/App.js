import React from 'react';
import './App.css';
import * as fetchCountries from './services/countries'


class App extends React.Component {
  render() {
    console.log(fetchCountries);
    return (
      <main>
        <h1>Lista de países</h1>
      </main>
    )
  }
}
 
export default App;
