const fetch = require('node-fetch');
const {appKey} = require('./config');

module.exports = async function(city = 'Kyiv'){
    try {
        const result = await (await (fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}`))).json();
    if (result.cod != 200){
        throw new Error(result.message);
    }
    return `Weather in ${city}: ${result.weather[0].main}, ${parseInt(result.main.temp - 273)} °`
} catch (err){
    return err.message;
}

};


// fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${appKey}`)
//     .then(data=>data.json())
//     .then(result=>{
//         console.log(result);
//     });
