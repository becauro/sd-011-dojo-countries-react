import React from 'react';
import Countries from './services/countries';

class CountriesList extends React.Component {
    componentDidMount() {
        const { fetchCountries } = Countries;
        const countriesList = fetchCountries();
    }
    
    render() {
        return(
            <div>
              {countriesList}  
            </div>            
        )        
    }
}

export default CountriesList;
