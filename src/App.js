import React from 'react';
import './App.css';
import {fetchCountries} from './services/countries';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      pais: '',
    }
  }

  async componentDidMount() {
    const paises = await fetchCountries();
    this.setState({
      countries: paises,
    });
  }

  render() {
    const { countries } = this.state;
    return (
      <main>
        <ul>
        {countries.map((countrie) => <li><img src={ countrie.flag } width="50px"/>{countrie.translations.br}</li>)}
        </ul>
      </main>
    )
  }
}

export default App;
