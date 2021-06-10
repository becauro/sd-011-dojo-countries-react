import React from 'react';

class CountryList extends React.Component {

  render() {
    const { countries } = this.props;

    return (
      <ul>
        { countries.map((country) => <li><span></span>{country.translations.br}</li>) }
      </ul>
    )
  }
}

export default CountryList;