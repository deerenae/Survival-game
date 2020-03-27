const shelterDropdown = document.querySelector('#shelter-dropdown')
const shelterSelection = document.querySelector('#shelter-selection')
shelterSelection.addEventListener("click", function(){
    passValue()
    // location.href ='tool.html'
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
    const shelterSelect = document.getElementById("shelter-dropdown").value;
    const weather = document.querySelector("#weather").innerText;
    const temp = weather.match(/\d+/g)[0];
    console.log(temp);


    const shelterobj = document.getElementById("shelter-dropdown");
    console.log(shelterobj);
    console.log(shelterobj.innerText);
    console.log(shelterobj.value);
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
