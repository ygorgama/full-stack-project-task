import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BoxCountries from "../components/BoxCountries";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function Country(){
    const [country, setCountry] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const countryCode = useParams();
    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/countries/index/" + countryCode.id).
        then(res => res.json())
        .then(data => {
            setCountry(data);

            setIsLoading(false);
        }).catch(err => console.log(err))
    }, [countryCode, setCountry]);



    return (
        <div >
          {
            !isLoading &&  ( 
                <>
                    <h1 className="mb-4">
                        {country.countryBorder.commonName}
                        <span className="ml-4"><img className="w-8 inline" src={country.countryFlag[0].flag} alt="Country flag" /></span>
                    </h1>
                    
                    <div>
                        <h2 className="mb-4">Border Countries</h2>
                        {
                            country.countryBorder.borders.length > 0 ? (
                                country.countryBorder.borders.map(country => (
                                    <BoxCountries key={country.countryCode} countryName={country.commonName} href={`/${country.countryCode}`}/>
            
                                ))
                            ) : <p>This country has no other country on his border</p>
                        
                        }
                    </div>
                    <div className="mt-10">
                        <h2>Population</h2>
                        <Bar
                            data={{
                                labels: country.countryPopulation[0].populationCounts.map(data => data.year),
                                datasets: [
                                    {
                                        label: "Population",
                                        data: country.countryPopulation[0].populationCounts.map(data => data.value),
                                    }
                                ],
                            }}
                        />
                    </div>
                </>
            )


          }

        </div>
    );
}


