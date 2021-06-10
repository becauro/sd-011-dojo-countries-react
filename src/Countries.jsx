import React from 'react';
import './Countries.css';

class Countries extends React.Component {

  render() {
    const { countries } = this.props;

    return (
      <div>
        <h1>Countries</h1>
        <ul>
          { countries.map((country, index) => (
            <li key={ index }>
              <img src={ country.flag } alt={ `${country.translations.br} bandeira` } className="flag-image" />
              { country.translations.br }
            </li>

          )) 
          }
        </ul>
      </div>
    )
  }
}

export default Countries;
