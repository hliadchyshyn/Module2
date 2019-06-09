function getData(url) {
    return new Promise((resolve, reject) => {
        let XHR = new XMLHttpRequest();
        // const ip = '217.25.198.197';
        XHR.open("GET", url);
        XHR.onreadystatechange = function (event) {
            if (XHR.readyState === 4) {
                if (XHR.status === 200) {
                    let response = JSON.parse(XHR.responseText);
                    resolve(response);

                } else {
                    reject('Something went wrong');
                }
            }


        };


        XHR.send();
    });
}

getData("http://ip-api.com/json/217.25.198.197")
    .then(location => {
        return getData(`https://api.openweathermap.org/data/2.5/weather?q=${location.city}&appid=c6fa139146ccde65728dcd4abfba3c82`)
            .then(result => {
                let cityName = document.getElementById("city-name");
                let icon = document.getElementById("icon");
                let temperature = document.getElementById("temp");
                cityName.innerHTML = result.name;
                icon.src = "http://openweathermap.org/img/w/" + result.weather[0].icon + ".png";
                temperature.innerHTML = parseInt(result.main.temp - 273) + "°";
            });

    });
