
//  function weather () {
//     fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=2cc8df7d9aaf0caf0291a295fae04fe0")
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       console.log();
//     //   document.querySelector(".timeDisplay").innerHTML = `Time: ${time}`;

//     });
//   };
//  weather ()


// var SearchedCityEl = document.querySelector(".searched-city");
// var temp = document.querySelector(".temp");
// var wind = document.querySelector(".wind");
// var humidity = document.querySelector(".humidity");
// var uvIndex = document.querySelector(".uvIndex");
// var fiveDayForecast = document.querySelector(".five-day-forecast")

// // const searchCity = (currentCityName) => {
// //     var weatherApi = "https://api.openweathermap.org/data/2.5/onecall?=";
// //     var APIKey = "2cc8df7d9aaf0caf0291a295fae04fe0";
// // }



// var APIKey = "2cc8df7d9aaf0caf0291a295fae04fe0";

// function currentWeather(city) {
//     var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + "2cc8df7d9aaf0caf0291a295fae04fe0";
// }





var SearchedCityEl = document.querySelector(".searched-city");
var wind = document.querySelector(".wind");
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".humidity");
var uvIndex = document.querySelector(".uvIndex");
var fiveDayForecast = document.querySelector(".five-day-forecast")
var Button = $(".search-button");
var currentCity = $(".current-city");

//API key set up//
var weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=";
var APIKey = "2cc8df7d9aaf0caf0291a295fae04fe0";
var apiFetch = weatherApi + cityName + APIKey;


function weather () {
    fetch("api.openweathermap.org/data/2.5/weather?id=524901&appid=2cc8df7d9aaf0caf0291a295fae04fe0")
    .then(response => {
        return response.json();
    })
    .then(data => {
        const name = data.name;
        const temp = Math.round(data.main.temp);
        const wind = parseInt(data.wind.speed);
        const humidity = data.main.humidity
        // const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`
    });
}






