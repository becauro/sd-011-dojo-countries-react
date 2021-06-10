import React from 'react';
import Countries from './services/countries';

class CountriesList extends React.Component {
    constructor() {
        super() 
        this.state = {
            countriesObj: {},
        }
    }

    async componentDidMount() {
        
        const newCountries = await Countries();
        console.log(newCountries)
        this.setState({
            countriesObj: newCountries,
        })
    }
    
    render() {
        return(
            <div>
              { this.state.countriesObj.map((listaPaises) => listaPaises).map((pais) => console.log(pais)) }  
            </div>            
        )        
    }
}

export default CountriesList;
