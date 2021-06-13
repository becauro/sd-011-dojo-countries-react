import React from 'react';
import PropTypes from 'prop-types';

export default function País({ country }) {
  const { flag, translations, capital, currencies, population } = country;
  const { br } = translations;
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full lazy" src={flag} alt={br} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Name: {br}</div>
        <h3 className="text-gray-700 text-base">Capital: {capital}</h3>
      </div>
      <div>
        {currencies.map(({ code, name, symbol }) => {
          return (
          <div key={code} className="px-6 py-4">
            <p className="text-gray-700 text-base">Currency code: {code}</p>
            <p className="text-gray-700 text-base">Currency name: {name}</p>
            <p className="text-gray-700 text-base">Currency symbol: {symbol}</p>
            <span className="text-gray-700 text-base">Population: {population}</span>
          </div>
          )
        })}
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
