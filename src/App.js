import React from 'react';
import './App.css';
import * as Paises from './services/countries';

class App extends React.Component {
  render() {
    const paises = Paises.fetchCountries();
    console.log(paises);
    return (
      <main>
        <ul>
        {/* {.map((pais) => )} */}
        </ul>
      </main>
    )
  }
}

export default App;
