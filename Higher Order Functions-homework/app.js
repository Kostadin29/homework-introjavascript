console.log("It works");

const previousBtn = document.querySelector(".previous-btn")
const nextBtn = document.querySelector(".next-btn")

const apiUrlOne = "https://swapi.dev/api/planets/?page=1";
const apiUrlTwo = "https://swapi.dev/api/planets/?page=2";
const tableEl = document.querySelector("#table")

const fetchApiOne = () => {
    fetch(apiUrlOne)
        .then(res => res.json())
        .then(data => {
            apiPageOne(data);
        })
}

const fetchApiTwo = () => {
    fetch(apiUrlTwo)
        .then(res => res.json())
        .then(data => {
            apiPageTwo(data);
        })
}


const apiPageOne = (data) => {
    tableEl.innerHTML = data.results
        .map(planet => `<tr> <td>${planet.name}</td>
        <td> ${planet.population}</td>
        <td> ${planet.climate}</td>
        <td> ${planet.gravity}</td></tr> `)
        .join(" ")

}

const apiPageTwo = (data) => {
    tableEl.innerHTML = data.results
        .map(planet => `<tr> <td>${planet.name}</td>
        <td> ${planet.population}</td>
        <td> ${planet.climate}</td>
        <td> ${planet.gravity}</td></tr> `)
        .join(" ")

}

nextBtn.addEventListener("click", () => {
    fetchApiOne();
})

previousBtn.addEventListener("click", () => {
    fetchApiTwo();
})