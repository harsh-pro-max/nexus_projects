const weatherBtn = document.querySelector("button");

const statusEl = document.querySelector(".status");
const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const humidityEl = document.querySelector(".humidity");
const descEl = document.querySelector(".description");
const inputEl= document.querySelector("#location");
const iconEl=document.createElement("img");
const weatherBox=document.querySelector(".weather-container");
weatherBox.appendChild(iconEl);


// click handler
weatherBtn.addEventListener("click",() => {
    
    showWeatherData();
    
});

// input handler
inputEl.addEventListener("keydown",(event)=>{
    if(event.key ==="Enter"){
        showWeatherData();
    }
})

// api function

async function fetchWeatherData(place) {
    const url = `http://api.weatherapi.com/v1/current.json?key=201f80e0da5343bf84432621262403&q=${place}&aqi=yes`;

    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("City not found");
        }

        const data = await res.json();
        console.log(data,data.current.condition.icon);
        return {
            temp_c: data.current.temp_c,
            temp_f: data.current.temp_f,
            humidity: data.current.humidity,
            condition: data.current.condition.text,
            city_name: data.location.name,
            icon:data.current.condition.icon
        };

    } catch (err) {
        console.log(err);
        return null;
    }
}



async function showWeatherData() {
    const place = inputEl.value;

    if (!place) {
        statusEl.innerText = "Please enter a city";
        return;
    }

    weatherBtn.disabled = true;
    statusEl.innerText = "Fetching data...";

    const data = await fetchWeatherData(place);

    if (!data) {
        statusEl.innerText = "Error fetching data";
        weatherBtn.disabled = false;
        return;
    }

    statusEl.innerText = "Data fetched";

    cityEl.innerText = `City: ${data.city_name}`;
    tempEl.innerText = `Temp: ${Math.round(data.temp_c)}°C`;
    humidityEl.innerText = `Humidity: ${data.humidity}%`;
    descEl.innerText = `Condition: ${data.condition}`;
    iconEl.src = `https:${data.icon}`;

    updateBackground(data.condition);

    weatherBtn.disabled = false;
}

// weather theams 
const weatherThemes = {
  Sunny: "#f7b733",
  Clear: "#4facfe",

  "Partly cloudy": "#a1c4fd",
  Cloudy: "#757f9a",
  Overcast: "#616161",

  Mist: "#bdc3c7",

  "Light rain": "#4b79a1",
  "Moderate rain": "#283e51",
  "Heavy rain": "#232526",

  Thunderstorm: "#0f2027",

  Snow: "#e6dada"
};

const weatherBack=document.querySelector(".weatherBox");
console.log(weatherBack)

function updateBackground(condition) {
    const normalized = condition.toLowerCase();

    // 1. Loop through keys
    for (let key in weatherThemes) {
        const lowerKey = key.toLowerCase();

        if (normalized.includes(lowerKey)) {
            weatherBack.style.background = weatherThemes[key];
            return;
        }
    }

    // 2. fallback
    weatherBack.style.background = "#4facfe";
}


