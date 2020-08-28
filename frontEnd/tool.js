const toolDropdown = document.querySelector('#tool-dropdown')
const toolSelection = document.querySelector('#tool-selection')
toolSelection.addEventListener("click", function(){
    passValue()
    location.href ='fate.html'
})

fetch('http://localhost:3000/tools')
.then(response => response.json())
.then(result => toolList(result))

function toolList(tools) {
    tools.forEach(tool => {
        const toolOptions = document.createElement('option')
        toolOptions.innerText = tool.name
        toolOptions.value = tool.rating
        toolDropdown.append(toolOptions)
    })
}
function passValue() {
    const toolSelect = document.getElementById("tool-dropdown").value;
    localStorage.setItem("tool", toolSelect)
    return true;
}

const btn = document.querySelectorAll(".btn");
const card = document.querySelectorAll(".card");

btn[0].addEventListener("click", function() {card[0].classList.toggle("active")});
btn[1].addEventListener("click", function() {card[1].classList.toggle("active")});
btn[2].addEventListener("click", function() {card[2].classList.toggle("active")});
btn[3].addEventListener("click", function() {card[3].classList.toggle("active")});
btn[4].addEventListener("click", function() {card[4].classList.toggle("active")});
btn[5].addEventListener("click", function() {card[5].classList.toggle("active")});
