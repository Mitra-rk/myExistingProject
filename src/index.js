let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";

let date = new Date();
console.log(date);
let thisDay = date.getDay();
let hours = date.getHours();
let min = date.getMinutes();
let day1 = getDay(thisDay);
let day = document.querySelector("#day");
day.innerHTML = `${day1} ${hours} : ${min}`;

function getDay(item) {
  let week = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wednsday",
    "Thirsday",
    "Friday",
    "Saturday",
  ];

  return week[item];
}

function getInfoByCity(response) {
  console.log(response);
  console.log(response.data.name);
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.name;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity} %`;
  let condition = document.querySelector("#condition");
  condition.innerHTML = response.data.weather[0].main;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${response.data.wind.speed} Km/h`;
  let h1 = document.querySelector("#temp");
  h1.innerHTML = Math.round(response.data.main.temp);
}

function getInfoByCoords(response) {
  console.log(response);
  console.log(response.data.name);
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.timezone;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.current.humidity} %`;
  let condition = document.querySelector("#condition");
  condition.innerHTML = response.data.current.weather[0].main;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${response.data.current.wind_speed} Km/h`;
  let h1 = document.querySelector("#temp");
  h1.innerHTML = Math.round(response.data.current.temp);
}

function putCity() {
  city = document.querySelector("#city-textbox");
  console.log(city.value);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getInfoByCity);
}
let searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", putCity);

function putCity1(event) {
  event.preventDefault();
}
let form = document.querySelector("#my-form");
form.addEventListener("submit", putCity1);

function getPosition(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  console.log(position);
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getInfoByCoords);
}
function putCurrent() {
  navigator.geolocation.getCurrentPosition(getPosition);
}

let currentBtn = document.querySelector("#current");
currentBtn.addEventListener("click", putCurrent);
