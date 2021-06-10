import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      api: {},
      loading: true,
      busca: '',
    };
    this.fetchCountries = this.fetchCountries.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCountries();
  }

  async fetchCountries() {
    const request = await fetch('https://restcountries.eu/rest/v2/all');
    const response = await request.json();
    this.setState({ api: response, loading: false });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  filterCountries() {
    const { api, busca } = this.state;

    let countries = api.map(({ translations, flag }) => (
      <li key={translations.br}>
        <img width="30px" src={flag} alt={translations.br} />
        {translations.br}
      </li>
    ));

    if (busca) {
      countries = countries.filter(({ props }) =>
        props.children[1].toLowerCase().includes(busca.toLowerCase())
      );
      return countries;
    }

    return countries;
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
        <label>
          Busca
          <input type="text" name="busca" onChange={this.handleChange}></input>
        </label>
        <ul>{this.filterCountries()}</ul>
      </main>
    );
  }
}

export default App;
