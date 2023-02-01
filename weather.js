const key = 'nz1uc3Z5jZGscJHyuGoylU0e0a8p1XVJ';

const getWeather = async (id) => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    
    return data[0];//console.log(data);
};

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data [0];
};

/*getCity('new york').then(data => {
    return getWeather(data.Key);
}).then(data => {
    console.log(data)
})
.catch(err => console.log(err));*/

//getWeather("349727")