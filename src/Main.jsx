import { Component } from 'react';
import { fetchCountries } from './services/countries'

export default class Main extends Component {
  constructor() {
    super()

    this.state = {
      paises: [],
    }

  }

   async componentDidMount () {
    await this.getNameCountry();
   console.log(this.state.paises)
  }

  async getNameCountry() {
    const paises = await fetchCountries();
    this.setState({
      paises
    })
  }

  render () {
    return (
      <p>Montou</p>
    );
  }
}