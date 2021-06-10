import React from 'react';
import './App.css';
import Countries from './services/Countries';

class App extends React.Component {
  render() {
    return (
      <main>
        <Countries />
      </main>
    )
  }
}

export default App;
