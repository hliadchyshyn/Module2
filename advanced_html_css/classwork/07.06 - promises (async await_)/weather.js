let cityXHR = new XMLHttpRequest();
const ip = '217.25.198.197';


cityXHR.onload = function (){
    if (cityXHR.status >= 200 && cityXHR.status < 300) {
        let cityResponse = JSON.parse(cityXHR.responseText);
        let city = cityResponse.city;

        let xhr = new XMLHttpRequest();
        const appKey = 'c6fa139146ccde65728dcd4abfba3c82';
        // let city = "Kyiv";
        let APIURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+appKey;
        xhr.onreadystatechange = function (event) {
            let cityName = document.getElementById("city-name");
            let icon = document.getElementById("icon");
            let temperature = document.getElementById("temp");
            // Process our return data
            if (this.status >= 200 && this.readyState === 4) {
                let data = JSON.parse(xhr.responseText);
                cityName.innerHTML = data.name;
                icon.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                temperature.innerHTML = parseInt(data.main.temp - 273) + "°";
                console.log(data);


            } else {
                console.log(xhr.responseText);
            }

        };

        xhr.open("GET", APIURL);
        xhr.send();

        console.log(cityResponse);
    } else {
        console.log(cityXHR.responseText);
    }

};

cityXHR.open("GET", "http://ip-api.com/json/"+ip);
cityXHR.send();














