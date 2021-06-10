import React from 'react';
import './App.css';
import Countries, { fetchCountries } from './services/countries';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      countries: [],
    }
  }

  componentDidMount(){
  fetchCountries()
  .then((data) => {
    this.setState({
      countries: data,
    })
  })
  console.log()
}

  render() {
    return (
      <main>
        <h1>Lista de países</h1>
      </main>
    )
  }
}

export default App;
