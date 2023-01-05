let weather = {

    fetchWeather: function(city) {
        //Get the data from website with url and the apikey
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city + "&units=metric&appid=fa73f7986fd7a4a71b32273d81cd9fce"
            )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    // to displayb the weather
    displayWeather: function(data){

        const { name } = data;
        const { icon , description } = data.weather[0];
        const { temp , humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerHTML = "Weather in " + name;

        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerHTML = description;

        document.querySelector(".temp").innerHTML = temp + " °C";
        document.querySelector(".humidity").innerHTML = "Humidity : "+humidity+" %";

        document.querySelector(".wind").innerHTML = "Wind Speed : "+speed + " km/h";


    },
    
    // to fetch the city name from the search bar
    search: function () {
       this.fetchWeather( document.querySelector(".search_bar").value);
    }
}

// search on button click
document.querySelector(".search").addEventListener("click", function(){
    weather.search();

})

// search on enter
document.querySelector(".search_bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

weather.fetchWeather("Pune");