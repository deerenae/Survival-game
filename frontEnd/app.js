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




const btn = document.querySelectorAll(".btn");
const card = document.querySelectorAll(".card");

btn[0].addEventListener("click", function() {card[0].classList.toggle("active")});
btn[1].addEventListener("click", function() {card[1].classList.toggle("active")});
btn[2].addEventListener("click", function() {card[2].classList.toggle("active")});
btn[3].addEventListener("click", function() {card[3].classList.toggle("active")});
btn[4].addEventListener("click", function() {card[4].classList.toggle("active")});
btn[5].addEventListener("click", function() {card[5].classList.toggle("active")});
