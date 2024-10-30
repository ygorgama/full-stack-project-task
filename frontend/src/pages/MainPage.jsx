import { useEffect, useState } from "react";
import BoxCountries from "../components/BoxCountries";

export default function MainPage(){
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/countries/index").
        then(res => res.json())
        .then(data => setCountries(data)).catch(err => console.log(err))
    }, [setCountries]);

    return (
        <div >
            <h1 className="mb-4">Countries</h1>
            <div >
                { countries.length > 0 && 
                    countries.map(country => (
                        <BoxCountries key={country.countryCode} countryName={country.name} href={country.countryCode}/>

                    ))
                }
            </div>
        </div>
    );
}