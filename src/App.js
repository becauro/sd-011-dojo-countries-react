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
  console.log(list)
}

  render() {

    const { translations  } = this.state.countries
    const { br } = translations

    return (
      <main>
        <h1>{br}</h1>
      </main>
    )
  }
}
//
export default App;
