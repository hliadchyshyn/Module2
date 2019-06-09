// <h1>List of all films</h1>
// <h3>Film 1 name</h3>
// <ul><li>Character 1</li></ul>


function getData(url) {
    return new Promise((resolve, reject) => {
        let XHR = new XMLHttpRequest();
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

function getCharsByFilm(filmUrl) {
    return new Promise((resolve, reject) => {
        getData(filmUrl).then(film => {
            return Promise.all(film.characters.map(link => getData(link)))
        }).then(chars => {
            resolve(chars.map(item => item.name))
        })
    })
}

const frag = document.createDocumentFragment();


getData(`https://swapi.co/api/films/`)
    .then(films => {
        const charsPromises = [];
        films.results.forEach((film) => {
            const filmContainer = document.createElement('div');
            filmContainer.classList.add(`film`);
            // filmContainer.id = `film-${films.episode_id}`;
            const filmTitle = document.createElement('h2');
            filmTitle.innerText = film.title;
            filmContainer.appendChild(filmTitle);
            frag.appendChild(filmContainer);
            charsPromises.push(getCharsByFilm(film.url));

        });
        let filmsWrapper = document.getElementById("films");
        filmsWrapper.appendChild(frag);
        return Promise.all(charsPromises);
    })
    .then(chars => {
            const films = document.getElementsByClassName(`film`);
            chars.forEach((charByFilm, index) => {
                const charList = document.createElement('ul');
                charByFilm.forEach(char => {
                    const charItem = document.createElement('li');
                    charItem.innerText = char;
                    charList.appendChild(charItem);
                });
                // console.log(films);
                films[index].appendChild(charList);
            })
        });


// getCharsByFilm('https://swapi.co/api/films/1/').then(data=>{
//         console.log(data);
//     }
// );
