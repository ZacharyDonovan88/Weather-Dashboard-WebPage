var apiKey = "eecb307afac43b2f69964ad25a580742"
//var apiKey = "efa0df1158172d3be566b80ee7c26fee"
var city = 'Adelaide'


var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


fetch(url).then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
    var lat = data.coord.lat
    var lon = data.coord.lon
    var url2 = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=6&appid=${apiKey}`
    fetch(url2).then((response2)=>{
        return response2.json()
    })
    .then((data2)=>{
        console.log(data2)
    })
})

