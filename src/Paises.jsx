import fetchCountries from './services/countries';

import React from 'react';

class Paises extends React.Component {
  render() {
    console.log(fetchCountries());
    return (
      <ul>
        {
          fetchCountries().then((Paises) => Paises.map((pais) => (<li>{pais.translations.br}</li>)))
        }
      </ul>
    );
  }
}

export default Paises;
