import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './countries.css'


const Countries = () => {
    const [countries, setCountries] =useState([])
    const [visiteCountries, setVisiteCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(date => setCountries(date))
    }, [])

    const handleVisiteContries = (country) => {
        console.log('add this to your visited country')
        const newVisiteContries = [...visiteCountries, country]
        setVisiteCountries(newVisiteContries)
    }
    const handelVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }
    // remove item from an arrey in a state
    // use filter to select all the elements expect the one you want to remove
    
    return (
        <div className="countries">
            <h3>Countries {countries.length}</h3>
            <div>
            <h5>Visited Countries : {visiteCountries.length}</h5>
            <ul>
               {
                visiteCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
               }
            </ul>
            </div>
            <div className="flags">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>

            <div >
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    country={country}
                    handleVisiteContries={handleVisiteContries}
                    handelVisitedFlags={handelVisitedFlags}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;