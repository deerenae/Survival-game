const shelterDropdown = document.querySelector('#shelter-dropdown')

fetch('http://localhost:3000/shelters')
.then(response => response.json())
.then(result => shelterList(result))

function shelterList(shelters) {
    shelters.forEach(shelter => {
        const shelterOptions = document.createElement('option')
        shelterOptions.innerText = shelter.name
        shelterOptions.value = shelter.id
        shelterDropdown.append(shelterOptions)
    })
}

var i;
for (i = 0; i < 1; i++) {

let btn = document.querySelector(".btn");
let card = document.querySelector(".card");

btn.addEventListener("click", () => {
    card.classList.toggle("active");
});
}