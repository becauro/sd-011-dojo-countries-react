import React, { Component } from 'react';
import País from './País';
import { fetchCountries } from './services/countries';

class ListaPaís extends Component {
  constructor() {
    super();

    this.state = {
      arrayPaises: [],
      flagLink: [],
    };
    this.GetPaises = this.GetPaises.bind(this);
  }

  async GetPaises() {
    const paises = await fetchCountries();

    paises.map((pais) => {
      this.setState((previousState) => ({
        arrayPaises: previousState.arrayPaises.concat(pais.translations.br),
        flagLink: previousState.flagLink.concat(pais.flag),
      }));
    });
  }

  componentDidMount() {
    this.GetPaises();
  }

  render() {
    const { arrayPaises, flagLink } = this.state;

    return (
      <ul>
        {arrayPaises.map((pais, index) => {
          return <País pais={ pais } flag={ flagLink[index] } />;
        })}
      </ul>
    );
  }
}

export default ListaPaís;
