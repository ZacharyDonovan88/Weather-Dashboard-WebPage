var apiKey = "a9fadd99451dce53d7e59c3bdca33f70"
var apiKey2 = "76479d21e14e29db9ca01c233c885cd1"
//var city = 'Adelaide'


//var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lat={lat}&lon={lon}`
var url5Day = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`


var searchBtn = document.querySelector("#searchBtn")
searchBtn.addEventListener('click', fetchWeather)
function fetchWeather() {
    var city = document.getElementById("searchClick");
    document.getElementById("demo").innerHTML = "You are searching for: " + x.value;
}





// current weather
fetch(url5Day)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var cityEl = document.getElementById('city_current_data');
    cityEl.innerHTML = data.city.name;   

    var dateEl = document.getElementById('date_current_data');
    dateEl.innerHTML = moment().format("MMM Do YY");
 
    var imgEl = document.getElementById('img_current_data');
    imgEl.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`

    var tempEl = document.getElementById('temp_current_data');
    tempEl.innerHTML = data.list[0].main.temp;  

    var windEl = document.getElementById('wind_current_data');
    windEl.innerHTML = data.list[0].wind.speed;  

    var humidityEl = document.getElementById('humidity_current_data');
    humidityEl.innerHTML = data.list[0].main.humidity;  

    //var uvEl = document.getElementById('UV_current_data');
   // uvEl.innerHTML = data.coord.lat; 

// 5 day forecast
   // day one
   var dateEl = document.getElementById('date_current_data1');
   dateEl.innerHTML = moment().add(1, 'days').format("MMM Do YY");

   var imgEl = document.getElementById('img_current_data1');
   imgEl.src = `http://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png`

   var tempEl = document.getElementById('temp_current_data1');
   tempEl.innerHTML = data.list[6].main.temp; 

   var windEl = document.getElementById('wind_current_data1');
   windEl.innerHTML = data.list[6].wind.speed;  

   var humidityEl = document.getElementById('humidity_current_data1');
   humidityEl.innerHTML = data.list[6].main.humidity;  

   // day two
   var dateEl = document.getElementById('date_current_data2');
   dateEl.innerHTML = moment().add(2, 'days').format("MMM Do YY");

   var imgEl = document.getElementById('img_current_data2');
   imgEl.src = `http://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png`

   var tempEl = document.getElementById('temp_current_data2');
   tempEl.innerHTML = data.list[14].main.temp; 

   var windEl = document.getElementById('wind_current_data2');
   windEl.innerHTML = data.list[14].wind.speed;  

   var humidityEl = document.getElementById('humidity_current_data2');
   humidityEl.innerHTML = data.list[14].main.humidity;  

   // day three
   var dateEl = document.getElementById('date_current_data3');
   dateEl.innerHTML = moment().add(3, 'days').format("MMM Do YY");

   var imgEl = document.getElementById('img_current_data3');
   imgEl.src = `http://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png`

   var tempEl = document.getElementById('temp_current_data3');
   tempEl.innerHTML = data.list[21].main.temp; 

   var windEl = document.getElementById('wind_current_data3');
   windEl.innerHTML = data.list[21].wind.speed;  

   var humidityEl = document.getElementById('humidity_current_data3');
   humidityEl.innerHTML = data.list[21].main.humidity;  

   // day four
   var dateEl = document.getElementById('date_current_data4');
   dateEl.innerHTML = moment().add(4, 'days').format("MMM Do YY");

   var imgEl = document.getElementById('img_current_data4');
   imgEl.src = `http://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png`

   var tempEl = document.getElementById('temp_current_data4');
   tempEl.innerHTML = data.list[29].main.temp; 

   var windEl = document.getElementById('wind_current_data4');
   windEl.innerHTML = data.list[29].wind.speed;  

   var humidityEl = document.getElementById('humidity_current_data4');
   humidityEl.innerHTML = data.list[29].main.humidity;  

   // day five
   var dateEl = document.getElementById('date_current_data5');
   dateEl.innerHTML = moment().add(5, 'days').format("MMM Do YY");

   var imgEl = document.getElementById('img_current_data5');
   imgEl.src = `http://openweathermap.org/img/wn/${data.list[37].weather[0].icon}@2x.png`

   var tempEl = document.getElementById('temp_current_data5');
   tempEl.innerHTML = data.list[37].main.temp; 

   var windEl = document.getElementById('wind_current_data5');
   windEl.innerHTML = data.list[37].wind.speed;  

   var humidityEl = document.getElementById('humidity_current_data5');
   humidityEl.innerHTML = data.list[37].main.humidity;  


});

