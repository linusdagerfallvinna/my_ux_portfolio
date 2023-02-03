const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('#citydiv');


//Updaterar UI
const updateUI = (data) => {

    const cityDets = data.cityDets;
    const weather = data.weather;

    console.log(weather.WeatherText);

    document.querySelector("#city").innerHTML = ` ${cityDets.EnglishName.toUpperCase()} <br /> ${weather.WeatherText.toUpperCase()} <br /> ${weather.Temperature.Metric.Value}°C`;

    if (weather.WeatherText == "Sunny" || weather.WeatherText == "Clear" || weather.WeatherText == "Clouds and sun" || weather.WeatherText == "Clouds and sun" || weather.WeatherText == "Mostly clear" || weather.WeatherText == "Mostly sunny" || weather.WeatherText == "Hazy sunshine" || weather.WeatherText == "Partly sunny") {
        document.getElementById('background-wrap').style.background = "linear-gradient(#2BC0E4, #EAECC6)";
        document.getElementById('city').style.color = "white";
        sun()
    }
    else if (weather.WeatherText == "Rain" || weather.WeatherText == "Light rain" || weather.WeatherText == "Showers" || weather.WeatherText == "T-Storms" || weather.WeatherText == "Rain and Snow") {
        document.getElementById('background-wrap').style.background = "#cccccc";
        document.getElementById('city').style.color = "black";
        cloud()
    }
    else if (weather.WeatherText == "Light snow" || weather.WeatherText == "Snow" ) {
        document.getElementById('background-wrap').style.background = "#cccccc";
        document.getElementById('city').style.color = "black";
        snow()
    }
    else {
        document.getElementById('background-wrap').style.background = "#cccccc";
        document.getElementById('city').style.color = "black";
        hideall()
    }
    let counter = 2;
    console.log("Antal anrop:"+counter+1);
    counter++;
};


//Updaterar staden
const updateCity = async (city) => {
    const cityDets = await getCity(city)
    const weather = await getWeather(cityDets.Key);

    return { cityDets, weather };
};

//Lyssnar på inmatningsfältet
cityForm.addEventListener('submit', e => {
    e.preventDefault();

    //Tar ut värdet på staden
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //Updaterar UI med ny stad
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
})

//Visar sol och döljer resten
function sun() {
    document.getElementById('sundiv').style.display = "flex";
    document.getElementById('rain').style.display = "none";
    document.getElementById('snow').style.display = "none";
    document.getElementById('cloud').style.display = "none";
}

//Visar snö och döljer resten
function snow() {
    document.getElementById('sundiv').style.display = "none";
    document.getElementById('rain').style.display = "none";
    document.getElementById('snow').style.display = "block";
    document.getElementById('cloud').style.display = "block";
}

//Visar regnmoln och döljer resten
function cloud() {
    document.getElementById('sundiv').style.display = "none";
    document.getElementById('rain').style.display = "block";
    document.getElementById('snow').style.display = "none";
    document.getElementById('cloud').style.display = "block";
}

//Visar moln och döljer resten
function hideall() {
    document.getElementById('sundiv').style.display = "none";
    document.getElementById('snow').style.display = "none";
    document.getElementById('rain').style.display = "none";
    document.getElementById('cloud').style.display = "block";
}