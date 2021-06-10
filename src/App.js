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

componentDidMount() {
  const list = fetchCountries().then();
  this.setState({
    countries: fetchCountries(),
  })
  // console.log();
}




  render() {
    
    return (
      <main>
        <h1>Lista de países</h1>
      </main>
    )
  }
}
//
export default App;
