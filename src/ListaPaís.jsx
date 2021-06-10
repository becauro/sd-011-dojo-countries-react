import React, { Component } from 'react';
import País from './País';
import { fetchCountries } from './services/countries';

class ListaPaís extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayPaises: [],
      flagLink: [],
    };
    this.GetPaises = this.GetPaises.bind(this);
  }

  async GetPaises() {
    const paises = await fetchCountries();
    let arrayDePaises = [];
    let arrayFlag = [];

    paises.map((pais) => {
      arrayDePaises.push(pais.translations.br);
      arrayFlag.push(pais.flag);
    });

    this.setState({
      arrayPaises: arrayDePaises,
      flagLink: arrayFlag,
    });
  }

  componentDidMount() {
    this.GetPaises();
  }

  render() {

    return (
      <ul>
        {this.state.arrayPaises.map((pais, index) => {
          return <País pais={pais} flag={this.state.flagLink[index]} />;
        })}
      </ul>
    );
  }
}

export default ListaPaís;
