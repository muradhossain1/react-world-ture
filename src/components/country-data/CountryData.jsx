

const CountryData = ({country, handleVisiteContries, handelVisitedFlags}) => {
    console.log('inside country data', country, handleVisiteContries, handelVisitedFlags)
    return (
        <div>
            <h4>Country Data : {country.name.common}</h4>
        </div>
    );
};

export default CountryData;
