const apiKey = "a9fadd99451dce53d7e59c3bdca33f70";
const apiKey2 = "47f166773e351368285402b79068ea73";



//var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lat={lat}&lon={lon}`


var searchBtn = document.querySelector("#searchBtn");
var inputField = document.querySelector("#searchClick");

console.log(searchBtn);
searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    fetchWeather(inputField.value);
    history(inputField.value);
});






var recentSearches = []; 
console.log(recentSearches)
function history() {
    recentSearches.push($(inputField).val()); 
    localStorage.setItem('history', recentSearches);
    $(inputField).val(""); 
    $('#searchHistory').text(""); 
    

    $.each(recentSearches, function (index, value) {
        $('#searchHistory').append("<li class='historyItem'  onclick='addtotextbox("+index+")'>" + value + '</li>');
    });
    
}

function addtotextbox(id)
{
$(inputField).val(recentSearches[id]);
}

function populateFromLocalStorage() {
    var cityHistoryArr = localStorage.getItem('history').split(',');

    $(cityHistoryArr).each(function (index, value) {
        recentSearches.push(value);
     
        $('#searchHistory').append("<li class='historyItem'  onclick='addtotextbox("+index+")'>" + value + '</li>');
    })
}
populateFromLocalStorage();


/*
function fetchUV(city) {
var uvIndex = `https://api.openweathermap.org/data/3.0/onecall?q=${city}&lat={lat}&lon={lon}&exclude={part}&appid=${apiKey}`

fetch(uvIndex)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var cityEl = document.getElementById('city_current_data');
    cityEl.innerHTML = data.city.name; 
})
};
*/                                              // *** UV index API has been deprecated from website *** //


var time = "12:00";
console.log(time)
var time = moment(time);

function fetchWeather(city) {
    var url5Day = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lon={lon}`

    fetch(url5Day)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var cityEl = document.getElementById('city_current_data');
        cityEl.innerHTML = data.city.name;   
    
        var dateEl = document.getElementById('date_current_data');
        dateEl.innerHTML = moment().format("dddd, MMM Do YYYY");
     
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
       dateEl.innerHTML = moment().add(1, 'days').set('hour', 12).set('minute', 0).format("dddd, MMM Do");
    
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
       dateEl.innerHTML = moment().add(2, 'days').set('hour', 12).set('minute', 0).format("dddd, MMM Do");
    
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
       dateEl.innerHTML = moment().add(3, 'days').set('hour', 12).set('minute', 0).format("dddd, MMM Do");
    
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
       dateEl.innerHTML = moment().add(4, 'days').set('hour', 12).set('minute', 0).format("dddd, MMM Do");
    
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
       dateEl.innerHTML = moment().add(5, 'days').set('hour', 12).set('minute', 0).format("dddd, MMM Do");
    
       var imgEl = document.getElementById('img_current_data5');
       imgEl.src = `http://openweathermap.org/img/wn/${data.list[37].weather[0].icon}@2x.png`
    
       var tempEl = document.getElementById('temp_current_data5');
       tempEl.innerHTML = data.list[37].main.temp; 
    
       var windEl = document.getElementById('wind_current_data5');
       windEl.innerHTML = data.list[37].wind.speed;  
    
       var humidityEl = document.getElementById('humidity_current_data5');
       humidityEl.innerHTML = data.list[37].main.humidity;  
    });
    
}

fetchWeather('adelaide');



    function uvIndex() {

        var uvIndex = Math.floor((Math.random() * 10) + 1);
        console.log(uvIndex);
        document.getElementById("UV_current_data").innerHTML = uvIndex;
        if (parseInt(document.getElementById("UV_current_data").innerHTML) < 3) {
            document.getElementById("UV_current_data").classList.add('green')
        } else if (parseInt(document.getElementById("UV_current_data").innerHTML) >= 3 && parseInt(document.getElementById("UV_current_data").innerHTML) < 6) {
            document.getElementById("UV_current_data").classList.add('yellow')
        } else if (parseInt(document.getElementById("UV_current_data").innerHTML) >= 6 && parseInt(document.getElementById("UV_current_data").innerHTML) < 8) {
            document.getElementById("UV_current_data").classList.add('orange')
        } else if (parseInt(document.getElementById("UV_current_data").innerHTML) >= 8) {
            document.getElementById("UV_current_data").classList.add('red')
        }

        var uvIndex = Math.floor((Math.random() * 10) + 1);
        console.log(uvIndex);
        document.getElementById("UV_current_data1").innerHTML = uvIndex;
        if (parseInt(document.getElementById("UV_current_data1").innerHTML) < 3) {
            document.getElementById("UV_current_data1").classList.add('green')
        } else if (parseInt(document.getElementById("UV_current_data1").innerHTML) >= 3 && parseInt(document.getElementById("UV_current_data1").innerHTML) < 6) {
            document.getElementById("UV_current_data1").classList.add('yellow')
        } else if (parseInt(document.getElementById("UV_current_data1").innerHTML) >= 6 && parseInt(document.getElementById("UV_current_data1").innerHTML) < 8) {
            document.getElementById("UV_current_data1").classList.add('orange')
        } else if (parseInt(document.getElementById("UV_current_data1").innerHTML) >= 8) {
            document.getElementById("UV_current_data1").classList.add('red')
        }

        var uvIndex = Math.floor((Math.random() * 10) + 1);
        console.log(uvIndex);
        document.getElementById("UV_current_data2").innerHTML = uvIndex;
        if (parseInt(document.getElementById("UV_current_data2").innerHTML) < 3) {
            document.getElementById("UV_current_data2").classList.add('green')
        } else if (parseInt(document.getElementById("UV_current_data2").innerHTML) >= 3 && parseInt(document.getElementById("UV_current_data2").innerHTML) < 6) {
            document.getElementById("UV_current_data2").classList.add('yellow')
        } else if (parseInt(document.getElementById("UV_current_data2").innerHTML) >= 6 && parseInt(document.getElementById("UV_current_data2").innerHTML) < 8) {
            document.getElementById("UV_current_data2").classList.add('orange')
        } else if (parseInt(document.getElementById("UV_current_data2").innerHTML) >= 8) {
            document.getElementById("UV_current_data2").classList.add('red')
        }

        var uvIndex = Math.floor((Math.random() * 10) + 1);
        console.log(uvIndex);
        document.getElementById("UV_current_data3").innerHTML = uvIndex;
        if (parseInt(document.getElementById("UV_current_data3").innerHTML) < 3) {
            document.getElementById("UV_current_data3").classList.add('green')
        } else if (parseInt(document.getElementById("UV_current_data3").innerHTML) >= 3 && parseInt(document.getElementById("UV_current_data3").innerHTML) < 6) {
            document.getElementById("UV_current_data3").classList.add('yellow')
        } else if (parseInt(document.getElementById("UV_current_data3").innerHTML) >= 6 && parseInt(document.getElementById("UV_current_data3").innerHTML) < 8) {
            document.getElementById("UV_current_data3").classList.add('orange')
        } else if (parseInt(document.getElementById("UV_current_data3").innerHTML) >= 8) {
            document.getElementById("UV_current_data3").classList.add('red')
        }

        var uvIndex = Math.floor((Math.random() * 10) + 1);
        console.log(uvIndex);
        document.getElementById("UV_current_data4").innerHTML = uvIndex;
        if (parseInt(document.getElementById("UV_current_data4").innerHTML) < 3) {
            document.getElementById("UV_current_data4").classList.add('green')
        } else if (parseInt(document.getElementById("UV_current_data4").innerHTML) >= 3 && parseInt(document.getElementById("UV_current_data4").innerHTML) < 6) {
            document.getElementById("UV_current_data4").classList.add('yellow')
        } else if (parseInt(document.getElementById("UV_current_data4").innerHTML) >= 6 && parseInt(document.getElementById("UV_current_data4").innerHTML) < 8) {
            document.getElementById("UV_current_data4").classList.add('orange')
        } else if (parseInt(document.getElementById("UV_current_data4").innerHTML) >= 8) {
            document.getElementById("UV_current_data4").classList.add('red')
        }

        var uvIndex = Math.floor((Math.random() * 10) + 1);
        console.log(uvIndex);
        document.getElementById("UV_current_data5").innerHTML = uvIndex;
        if (parseInt(document.getElementById("UV_current_data5").innerHTML) < 3) {
            document.getElementById("UV_current_data5").classList.add('green')
        } else if (parseInt(document.getElementById("UV_current_data5").innerHTML) >= 3 && parseInt(document.getElementById("UV_current_data5").innerHTML) < 6) {
            document.getElementById("UV_current_data5").classList.add('yellow')
        } else if (parseInt(document.getElementById("UV_current_data5").innerHTML) >= 6 && parseInt(document.getElementById("UV_current_data5").innerHTML) < 8) {
            document.getElementById("UV_current_data5").classList.add('orange')
        } else if (parseInt(document.getElementById("UV_current_data5").innerHTML) >= 8) {
            document.getElementById("UV_current_data5").classList.add('red')
        }

        }
        uvIndex()


function uvColor(uvIndex) {
    if (uvIndex <= 2) {
        document.getElementsByClassName('green')
    }
    else if (uvIndex <= 5 && uvIndex > 2) {
        document.getElementsByClassName('yellow')
    }
    else if (uvIndex >= 6 && uvIndex > 5) {
        document.getElementsByClassName('red')
    }
}
uvColor()

$('#clearHistory').on('click', function (e) {
    e.preventDefault();
    localStorage.clear();
    $('#searchHistory').empty();
})








/*
var uvIndex = Math.floor((Math.random() * 10) + 1);

function uvColor(uvIndex) {
    if (uvIndex <= 2) {
        document.getElementsByClassName('green')
    }
    else if (uvIndex <= 5 && uvIndex > 2) {
        document.getElementsByClassName('yellow')
    }
    else if (uvIndex >= 6 && uvIndex > 5) {
        document.getElementsByClassName('red')
    }
}
uvColor()
*/




/*function colourUv() {

    console.log(num)
    for (var i = 0; i < uvIndex.length; i++) {
        console.log(uvIndex[i] .id)
        if (uvIndex[i].id > 3) {
            uvIndex[i].getElementsByClassName('.green')
        }
        else if (uvIndex[i].id < hour) {
            uvIndex[i].style.backgroundColor = "grey"
        }
    }

}
*/