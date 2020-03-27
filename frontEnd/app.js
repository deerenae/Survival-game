const shelterDropdown = document.querySelector('#shelter-dropdown')
const shelterSelection = document.querySelector('#shelter-selection')
shelterSelection.addEventListener("click", function(){
    passValue()
    location.href ='tool.html'
})


fetch('http://localhost:3000/shelters')
.then(response => response.json())
.then(result => shelterList(result))

function shelterList(shelters) {
    shelters.forEach(shelter => {
        const shelterOptions = document.createElement('option')
        shelterOptions.innerText = shelter.name
        shelterOptions.value = shelter.rating
        shelterDropdown.append(shelterOptions)
    })
}

function passValue() {
    const shelterObj = document.getElementById("shelter-dropdown");
    const weather = document.querySelector("#weather").innerText;
    let temp = weather.match(/\d+/g)[0];
    let conditions = [];
    if (weather.match( /sun|rain|snow|cloud/g )) {
        conditions = weather.match( /sun|rain|snow|cloud/g );
    }
    else {
        let conditions = ["cloud"];
    }

    if (temp > 60) {
        shelterObj[0].value = parseFloat(shelterObj[0].value) + 3;
        shelterObj[1].value = parseFloat(shelterObj[1].value) + 2;
        shelterObj[2].value -= 4;
        shelterObj[3].value -= 2;
        shelterObj[4].value = 0;
        shelterObj[5].value = parseFloat(shelterObj[5].value) + 2;
    }

    if (temp <= 60 && temp > 50) {
        shelterObj[4].value -= 3;
        shelterObj[1].value = praseFloat(shelterObj[1].value) + 2;
    }

    if (temp <= 50 && temp > 40) {
        shelterObj[0].value -= 2;
        shelterObj[1].value -= 1;
        shelterObj[4].value -= 1;
    }

    if (temp <= 40 && temp > 32) {
        shelterObj[0].value -= 3;
        shelterObj[1].value -= 1;
        shelterObj[3].value -= 1;
        shelterObj[5].value -= 2;
    }

    if (temp < 32) {
        shelterObj[0].value -= 4;
        shelterObj[1].value -= 2;
        shelterObj[3].value -= 2;
        shelterObj[4].value = parseFloat(shelterObj[4].value) + 4;
        shelterObj[5].value -= 3;
    }

    if (conditions.includes("sun")) {
        shelterObj[0].value = parseFloat(shelterObj[0].value) + 1;
        shelterObj[1].value = parseFloat(shelterObj[1].value) + 1;
        shelterObj[2].value -= 1;
        shelterObj[3].value -= 1;
        shelterObj[5].value = parseFloat(shelterObj[5].value) + 1;
    }

    if (conditions.includes("rain") || conditions.includes("wind")) {
        shelterObj[0].value -= 2;
        shelterObj[1].value -= 1;
        shelterObj[5].value -= 1;
    }

    if (conditions.includes("snow")) {
        shelterObj[0].value -= 2;
        shelterObj[1].value -= 1;
        shelterObj[5].value -= 1;
    }

    for (var i = 0; i < 6; i++) {
        if (shelterObj[i].value < 0) {
            shelterObj[i] = 0;
        }
    }
    const shelterSelect = shelterObj.value;
    localStorage.setItem("shelter", shelterSelect)
    return true;
}

link = "https://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&apikey=6758f17c71f45068f52b0a450b4e508a";
let request = new XMLHttpRequest();
request.open("GET", link, true);
request.onload = function() {
    let obj = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        let temp = obj.main.temp;
        let conditions = obj.weather[0].description;
        let weatherSection = document.getElementById("weather");
        let content = document.createTextNode(`${temp} degrees and ${conditions}`);
        weatherSection.appendChild(content);
    }
    else {
        console.log("Looks like our meteorologists didn't make it...");
    }
}
request.send();



const btn = document.querySelectorAll(".btn");
const card = document.querySelectorAll(".card");

btn[0].addEventListener("click", function() {card[0].classList.toggle("active")});
btn[1].addEventListener("click", function() {card[1].classList.toggle("active")});
btn[2].addEventListener("click", function() {card[2].classList.toggle("active")});
btn[3].addEventListener("click", function() {card[3].classList.toggle("active")});
btn[4].addEventListener("click", function() {card[4].classList.toggle("active")});
btn[5].addEventListener("click", function() {card[5].classList.toggle("active")});
