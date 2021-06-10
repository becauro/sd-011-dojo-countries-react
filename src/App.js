import React from 'react';
import './App.css';
import CountriesList from './CountriesList';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Lista de países</h1>
        <CountriesList />
      </main>
    )
  }
}

export default App;
