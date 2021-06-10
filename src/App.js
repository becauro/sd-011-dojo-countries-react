import React from 'react';
import './App.css';
import fetchCountries from './services/countries'
 
class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Lista de países</h1>
        <ol>
          { fetchCountries() }
        </ol>
      </main>
    )
  }
}

export default App;
