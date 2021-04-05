// SELECTORS
const endPoint = "http://localhost:3000/api/v1/races"

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    fetchRaces()
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