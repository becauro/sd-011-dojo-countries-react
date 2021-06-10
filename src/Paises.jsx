import fetchCountries from './services/countries';

import React from 'react';

class Paises extends React.Component {
  render() {
    return (
      <ul>
        {
          fetchCountries.map((pais) => (<li>{pais.translations.br}</li>))
        }
      </ul>
    );
  }
}

export default Paises;
