import React from 'react';

class CountryList extends React.Component {

  render() {
    const { countries } = this.props;

    return (
      <ul>
        { countries.map((country) => <li><span><img src={country.flag}></img></span><span>{country.translations.br}</span></li>) }
      </ul>
    )
  }
}

export default CountryList;