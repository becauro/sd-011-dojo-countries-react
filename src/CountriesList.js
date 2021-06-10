import React from 'react';
import Countries from './services/countries';

class CountriesList extends React.Component {


    async componentDidMount() {
        
        const newCountries = await Countries();
        console.log(newCountries)
    }
    
    render() {
        return(
            <div>
              {/* { countriesList}   */}
            </div>            
        )        
    }
}

export default CountriesList;
