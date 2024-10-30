const axios = require('axios');

class CountryController{
    async index(req, res){
        try {
            const countries = await axios.get(process.env.INDEX_COUNTRIES_URL);
            return res.status(200).json(countries.data); 
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async indexOne(req, res){
        try {
            const countryCode = req.params.id;

            const countryDataRequest = await axios.get(process.env.INDEX_COUNTRY_BORDERS_URL + countryCode);
            const countryData = countryDataRequest.data;

            const countriesFlagsDataRequest = await axios.get(process.env.INDEX_COUNTRIES_FLAGS);
            const countriesFlagsData = countriesFlagsDataRequest.data.data
            const countryFlag = countriesFlagsData.filter(flag => flag.iso2 == countryCode);

            const countriesPoulationRequest = await axios.get(process.env.INDEX_COUNTRIES_POPULATION);
            const countriesPoulationData = countriesPoulationRequest.data.data;
            const countryPopulation = countriesPoulationData.filter(data => data.iso3 == countryFlag[0].iso3);

            return res.status(200).json({
                message: "Fetched sucessfuly!",
                countryBorder: countryData,
                countryFlag: countryFlag,
                countryPopulation: countryPopulation
            }); 
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = CountryController;