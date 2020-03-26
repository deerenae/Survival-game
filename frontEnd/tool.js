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
        toolOptions.value = tool.id
        toolDropdown.append(toolOptions)
    })
}
function passValue() {
    const toolSelect = document.getElementById("tool-dropdown").value;
    localStorage.setItem("tool", toolSelect)
    return true;
}