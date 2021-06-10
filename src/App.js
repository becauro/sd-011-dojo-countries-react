import React from 'react';
import './App.css';
import { fetchCountries } from './services/countries';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Details from './Components/Details';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      countries: [],
      filter: [],
    };

    this.filterInput = this.filterInput.bind(this);
  }

  async componentDidMount() {
    const list = await fetchCountries();
    this.setState({
      countries: list,
      filter: list,
    });
  }

  filterInput({ target }) {
    this.setState({
      input: target.value,
    }, () => {
      const { input, countries } = this.state;

      let filteredCountries = countries;

      if (input) {
        filteredCountries = countries.filter(({ translations: { br } }) => br.toLowerCase().includes(input.toLowerCase()));
        this.setState({
          filter: filteredCountries,
        });
      }

      // Talvez depois.
      // if (input) {
      //   filteredCountries = countries.find(({ alpha2Code }) => alpha2Code.toLowerCase() === input.toLowerCase());
      //   this.setState({
      //     filter: filteredCountries,
      //   });
      // }

      if (!input) {
        this.setState({
          filter: countries,
        });
      }
    });
  }

  render() {
    const { filter } = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <main>
              <label htmlFor="filterCountry">
                Filtre o país
          <input type='text' name="filterCountry" onChange={this.filterInput} />
              </label>
              {filter.map((country) => {
                return (
                  <div>
                    <h1> {country.translations.br} </h1>
                    <img src={country.flag} width="35" alt={`Bandeira de ${country.translations.br}`} />
                    <Link to={`/contry/${ country.name }`}>Ver detalhes</Link>
                  </div>
                )
              })}
            </main>
          </Route>
          <Route exact path="/country/:name" component={ Details }/>
        </Switch>
      </Router>
    )
  }
}
//
export default App;
