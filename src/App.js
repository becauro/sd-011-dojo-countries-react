import React from 'react';
import './App.css';
import TranslationsCountries from './TranslationsCountries';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Lista de países</h1>
        <TranslationsCountries />
      </main>
    )
  }
}

export default App;
