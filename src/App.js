import React from 'react';
import './App.css';
import CoutriesList from './components/CoutriesList';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Lista de países</h1>
        <CoutriesList />
      </main>
    )
  }
}

export default App;
