const apiKey = "6d796d1f965493426f4ea692e9334d36"
const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric"


const getWeather = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        const data = await response.json()
        console.log(data);

        // document.querySelector(".weather-data").style.display = "block"
        document.querySelector(".weather-data").classList.toggle("hidden")

        document.getElementById("city-name").innerHTML = data.name
        document.getElementById("temp").innerHTML = Math.trunc(data.main.temp) + " ℃"
        document.getElementById("humidity").innerHTML = data.main.humidity + " %"
        document.getElementById("wind").innerHTML = Math.trunc(data.wind.speed) + " km/hr"

    } catch (error) {
        console.log(error);
    }
}

let input = document.getElementById("city")
let searchBtn = document.querySelector("#search")

searchBtn.addEventListener("click", (event) => {
    let city = input.value.trim()
    if (city) {
        getWeather(city)
    }
    else {
        alert("ENTER THE CITY NAME BEFORE SEARCH")
    }
})

