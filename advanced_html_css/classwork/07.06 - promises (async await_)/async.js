// <h1>List of all films</h1>
// <h3>Film 1 name</h3>
// <ul><li>Character 1</li></ul>

//
// (async function  () {
//     async function getData(url) {
//         return new Promise((resolve, reject) => {
//             let XHR = new XMLHttpRequest();
//             XHR.open("GET", url);
//             XHR.onreadystatechange = function (event) {
//                 if (XHR.readyState === 4) {
//                     if (XHR.status === 200) {
//                         let response = JSON.parse(XHR.responseText);
//                         resolve(response);
//
//                     } else {
//                         reject('Something went wrong');
//                     }
//                 }
//
//
//             };
//
//
//             XHR.send();
//         });
//     }
//
//     const filmResults = await getData('https://swapi.co/api/films/');
//     filmResults.results.forEach(async film=>{
//         const filmData = await getData(film.url);
//         const charNames = (await Promise.all(filmData.characters.map(item =>getData(item)))).map(item=>item.name)
//         console.log(charNames);
//     })
//
// })();
//
//

(async function () {
    const result = await (await (fetch('https://swapi.co/api/films/'))).json();
    console.log(result);

})();