const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('#citydiv');

const updateUI = (data) => {

    const cityDets = data.cityDets;
    const weather = data.weather;
    //update details tempelete



    /*details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;*/

    console.log(weather.WeatherText);
    /*if(weather.WeatherText == "Sunny"){
        document.body.style.backgroundColor = "blue"
        console.log("Soligt");
    }
    else{
        document.body.style.backgroundColor = "red"
        console.log("Inte soligt");
    }*/

    document.querySelector("#city").innerHTML = ` ${cityDets.EnglishName.toUpperCase()} <br /> ${weather.WeatherText.toUpperCase()} <br /> ${weather.Temperature.Metric.Value}°`;

    //Sunny
	//Mostly Sunny
3	//Partly Sunny
4	//Intermittent Clouds
5	//Hazy Sunshine


    //Clouds and sun
    //Mostly clear

    //Mostly cloudy
    if (weather.WeatherText == "Sunny" || weather.WeatherText == "Clear" || weather.WeatherText == "Clouds and sun" || weather.WeatherText == "Clouds and sun" || weather.WeatherText == "Mostly clear" || weather.WeatherText == "Mostly sunny" || weather.WeatherText == "Hazy sunshine" || weather.WeatherText == "Partly sunny") {
        /*document.getElementById('background-wrap').style.backgroundColor = "#00b4ff";*/
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

const updateCity = async (city) => {
    const cityDets = await getCity(city)
    const weather = await getWeather(cityDets.Key);

    return { cityDets, weather };
};

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //Update the UI with new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
})

/*cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //Update the UI with new city
    myFunction(city)
})
*/

function myFunction(city) {
    if (city == "Stockholm") {
        /*document.getElementById('background-wrap').style.backgroundColor = "#00b4ff";*/
        document.getElementById('background-wrap').style.backgroundImage = "linear-gradient(#2BC0E4, #EAECC6)";
        document.querySelector("#city").innerHTML = `${city.toUpperCase()} <br /> SUNNY <br /> 10°`;
        document.getElementById('city').style.color = "white";
        sun()
    }
    else {
        document.getElementById('background-wrap').style.backgroundColor = "#cccccc";
        document.querySelector("#city").innerHTML = `${city.toUpperCase()} <br /> CLOUDY <br /> 15°`;
        document.getElementById('city').style.color = "black";
        cloud()
    }
}


function sun() {
    document.getElementById('sundiv').style.display = "block";
    document.getElementById('rain').style.display = "none";
    document.getElementById('snow').style.display = "none";
    document.getElementById('container2').style.display = "none";
}

function snow() {
    document.getElementById('sundiv').style.display = "none";
    document.getElementById('rain').style.display = "none";
    document.getElementById('snow').style.display = "block";
    document.getElementById('container2').style.display = "block";
}

function cloud() {
    document.getElementById('sundiv').style.display = "none";
    document.getElementById('rain').style.display = "block";
    document.getElementById('snow').style.display = "none";
    document.getElementById('container2').style.display = "block";
}

function hideall() {
    document.getElementById('sundiv').style.display = "none";
    document.getElementById('snow').style.display = "none";
    document.getElementById('rain').style.display = "none";
    document.getElementById('container2').style.display = "block";
}