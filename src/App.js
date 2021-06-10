import React from 'react';
import CountriesList from "./components/CountriesList";
import './App.css';

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
