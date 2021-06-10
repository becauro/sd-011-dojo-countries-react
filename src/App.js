import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      api: {},
      loading: true,
    };
    this.fetchCountries = this.fetchCountries.bind(this);
  }

  componentDidMount() {
    this.fetchCountries();
  }

  async fetchCountries() {
    const request = await fetch('https://restcountries.eu/rest/v2/all');
    const response = await request.json();
    this.setState({ api: response, loading: false });
  }

  render() {
    const { api, loading } = this.state;
    if (loading) {
      return <p>Loading...</p>;
    }
    console.log(api[0]);
    return (
      <main>
        <h1>Lista de países</h1>
        <ul>
          {api.map(({ translations, flag }) => (
            <li key={translations.br}>
              <img width="30px" src={flag} alt={translations.br} />
              {translations.br}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default App;
