import { Component } from 'react';
import { fetchCountries } from './services/countries'

export default class Main extends Component {

  async componentDidMount () {
   console.log(await fetchCountries());
  }

  render () {
    return (
      <p>Montou</p>
    );
  }
}