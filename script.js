
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( position=> {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Fetch weather data from weather API using the user's location
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=c1518ea45a928df704dadd58f0d3222d&units=metric#`
        )
          .then(response => response.json())
          .then(data => {
            displayCurrentWeather(data);
          })
          .catch(error => {
            console.log(error);
          })
      });}

      
      
function getWeather() {
    const city = document.getElementById("cityInput" ).value;
  
   
    const location = city || delhi ;
  
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c1518ea45a928df704dadd58f0d3222d&units=metric#&lang=en`)
    
      .then(response => response.json())
      .then(data => {
        displayCurrentWeather(data);
   
      })
      .catch(error => {
        console.log(error);
      });
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=c1518ea45a928df704dadd58f0d3222d`)
      .then(response => response.json())
      .then(data => {
        // clear the forecast div
        document.getElementById("forecast").innerHTML = "";
  
        
        for (var i = 0; i < data.list.length; i += 8) {
          var dayData = data.list[i];
  
          const day = new Date(data.list[i].dt_txt).toLocaleDateString("en-US", {
            weekday: "short",
          });
  
          var dayDiv = document.createElement("div");
          dayDiv.className = "day";
          dayDiv.innerHTML = `
            <h3>${day}</h3>
            <img src="https://openweathermap.org/img/w/${dayData.weather[0].icon}.png">
            <p>${Math.round(dayData.main.temp - 273.15)}°C</p>
            <p>${dayData.weather[0].main}</p>
          `;
          document.getElementById("forecast").appendChild(dayDiv);
        }});
   
  
      }
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  
  function displayCurrentWeather(currentWeather) {
    const currentWeatherContainer = document.getElementById("currentWeather");
    currentWeatherContainer.innerHTML = `
      <p> ${formattedDate}</p>
      <p> ${currentWeather.name}</p>
      <p>${currentWeather.weather[0].description}</p>
      <img src=${"https://openweathermap.org/img/wn/"+currentWeather.weather[0].icon+"@2x.png"}>
      <p>Temperature: ${currentWeather.main.temp }c</p>
      <p>Humidity: ${currentWeather.main.humidity}%</p>
      <p>Wind Speed: ${currentWeather.wind.speed} km/h</p>

    `;
  
  }

// forecast

 

