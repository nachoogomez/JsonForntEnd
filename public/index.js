const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
const url = "./assets/personajes.json";
let hpCharacters = [];



const loadCharacters = async () => {
    try {
        const res = await fetch(url);
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.nombre}</h2>
                <p>House: ${character.casa}</p>
                <img src="${character.img}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();

