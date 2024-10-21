import CountryData from "../country-data/CountryData";


const CountyDetails = (props) => {
    // const{country, handleVisiteContries, handelVisitedFlags} = props;
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData 
              country ={country}
              handleVisiteContries ={handleVisiteContries}
              handelVisitedFlags ={handelVisitedFlags}
            ></CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountyDetails;