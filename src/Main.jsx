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
    const { paises } = this.state;
    return (
      <ul>
        { paises.map(({ translations, flag }) => 
        (<li>
          <img src={ flag } alt='imagem da bandeira' />
          <span>
          { translations.br }
          </span>
        </li>)) 
        }
      </ul>
    );
  }
}