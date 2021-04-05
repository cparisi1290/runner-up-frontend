// SELECTORS
const endPoint = "http://localhost:3000/api/v1/races"

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    createSearchForm();
})

// FUNCTIONS
function fetchRaces() {
    fetch(endPoint)
        .then(resp => resp.json())
        .then(json => renderRaces(json))
}

function renderRaces(races) {
    const div = document.querySelector("div");
    races.data.forEach(races => {

        const h2 = document.createElement("h2");
        h2.innerHTML = races.attributes.name; /*tried destructuring but h2 disappeared from broswer*/
        div.appendChild(h2);

        const city = document.createElement("p");
        city.innerHTML = races.attributes.city;
        div.appendChild(city);

        const state = document.createElement("p");
        state.innerHTML = races.attributes.state;
        div.appendChild(state);

        // const raceDate = document.createElement("p");
        // raceDate.innerHTML = races.attributes.race_date;
        // div.appendChild(raceDate);

        
        const distance = document.createElement("p");
        distance.innerHTML = races.attributes.distance;
        div.appendChild(distance);
        
        const theme = document.createElement("p");
        theme.innerHTML = races.attributes.theme.name;
        div.appendChild(theme);
        
        const website = document.createElement("p");
        website.innerHTML = races.attributes.website;
        div.appendChild(website);
        
        const description = document.createElement("p");
        description.innerHTML = races.attributes.description;
        div.appendChild(description);
    })
}
const createSearchForm = () => {
    // CREATE FORM
    const body = document.body

    // template literals to follow html and append
    body.innerHTML += 
    `
        <div id="search-form">
            <input type="text" id="search">
            <button id="search-btn">Search</button>
        </div>
    `

    let searchBtn = document.getElementById("search-btn") 
    searchBtn.addEventListener("click", processSearchQuery)
}

const processSearchQuery = () => {
    // GET VALUE OF INPUT
    let query = document.getElementById("search").value

    // FETCH REQUEST
    fetch(`http://127.0.0.1:3000/api/v1/search/${query}`)
        .then(resp => resp.json())
        .then(themes => console.log(themes))
}