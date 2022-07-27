
//Button functionailty and search bar

$("#searchWeather").on("click", function (){
    var searchVal=$("#searchCity").val();
    var weatherAPIurl="http://api.openweathermap.org/geo/1.0/direct?q="+searchVal+"&appid=d572ae73424a51099cdef316a3e66b68"
    fetchCoords(weatherAPIurl);
});

function fetchCoords(url){
    $.ajax({
        url: url,
        method: "GET"
    }).then(function(res){
        console.log(res);
        fetchWeather(res[0].lat, res[0].lon)        
    });
}  


function fetchWeather(lat,lon){
var weatherResults="https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=d572ae73424a51099cdef316a3e66b68&units=imperial"
// console.log(weatherResults);
$.ajax({
    url: weatherResults,
    method: "GET"
}).then(function(res){
    console.log(res);     
    // showtodayWeather(); 

});
}


// For appending information of today's forecast to html card id todayForecast

// function showtodayWeather(){
// var card = $("<div>").addClass("card");
// var cardInfo = $("<div>").addClass("card-body");
// cardInfo.append(title, temp, humid, wind);
// card.append(cardInfo);
// $("#todayForecast").append(card);
// }


   
// note to self, 'for' loop appending info to html onto fiveDays id
