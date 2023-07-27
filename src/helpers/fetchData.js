const fetchData = async (location, days) => {
    try {
        console.log(process.env.REACT_APP_API_KEY);
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0f2c50e27cf144fa8c9160825232707&q=${location}&days=${days}&aqi=no&alerts=no`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
    }
};

export default fetchData;