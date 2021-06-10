import React from 'react';
import './App.css';
import { fetchCountries } from './services/countries';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      countries: [],
    };

  }

async componentDidMount() {
  const list = await fetchCountries();
  this.setState({
    countries: list,
  })
  console.log(list[0].translations.br)
}

  render() {

const { countries } = this.state;

    return (
      <main>
        {countries.map((country) => (<h1> {country.translations.br} </h1>))}
      </main>
    )
  }
}
//
export default App;
