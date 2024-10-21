import { useState } from 'react';
import '../country.css'
import CountyDetails from '../details/CountyDetails';

const Country = ({country, handleVisiteContries, handelVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false)
    const handelVisited = () =>{
    setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={() => handelVisitedFlags(country.flags.png)}>Add Flags</button>
            <br />
            <button onClick={() => handleVisiteContries(country)}>Mark visited</button>
            <button onClick={handelVisited}>{visited ? 'Visited' : 'Going'}</button>
            
            {visited ? 'I have Visited this country' : 'I want visited'}
            <hr />
            <CountyDetails
              country={country}
              handelVisitedFlags = {handelVisitedFlags}
              handleVisiteContries = {handleVisiteContries}
            ></CountyDetails>
        </div>
    );
};

export default Country;
