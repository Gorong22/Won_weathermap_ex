const getCurrentWeather = (lat, lon) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d5a5d7b660c7c7888786d6380bba5592&units=metric`;
  
  fetch(URL).then((respnse) => respnse.json()).
  then((result) => {
    console.log(result);
    
    const temp = document.querySelector(".temp");
    temp.innerText = `${result.main.temp} 도`;
  
    let weatherInfo;
    const weather = document.querySelector(".weather");
    switch(result.weather[0].main) {
      case "Clear" :
        weatherInfo = "🐶좋음";
    }
    weather.innerText =  weatherInfo;

    let cityName;
    const city = document.querySelector(".city")
    switch(result.name) {
      case "Jamwon-dong":
        cityName = "🏢 역삼동";
    }
    city.innerText = cityName;

    const icon = document.querySelector(".icon");
    icon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`

  });  
};

const getPosition = (position) => {
  const {latitude, longitude} = position.coords;
  getCurrentWeather(latitude, longitude)
};

const errorHandle = (error) => {
  console.error(error);
};

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandle);
} else {
  console.log("geolocation is not available");
}
