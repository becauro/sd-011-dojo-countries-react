import React from 'react';
import PropTypes from 'prop-types';

export default function País({ country }) {
  const { flag, name, capital, currencies, population } = country;
  
  return (
    <div>
      <img width="300px" src={flag} alt={name} />
      <h3>Capital: {capital}</h3>
      <div>
        {currencies.map(({ code, name, symbol }) => {
          return (
          <div key={code}>
            <p>Currency code: {code}</p>
            <h4>Currency name: {name}</h4>
            <p>Currency symbol: {symbol}</p>
          </div>
          )
        })}
        <span>Population: {population}</span>
      </div>
    </div>
  );
}

País.propTypes = {
  country: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
    population: PropTypes.number.isRequired,
  }).isRequired,
};
