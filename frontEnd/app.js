const shelterDropdown = document.querySelector('#shelter-dropdown')
const toolDropdown = document.querySelector('#tool-dropdown')
const button = document.querySelector('#tool-button')

fetch('http://localhost:3000/shelters')
.then(response => response.json())
.then(result => shelterList(result))

// fetch('http://localhost:3000/tools')
// .then(response => response.json())
// .then(result => createButton(result))

function shelterList(shelters) {
    shelters.forEach(shelter => {
        const shelterOptions = document.createElement('option')
        shelterOptions.innerText = shelter.name
        shelterOptions.value = shelter.id
        shelterDropdown.append(shelterOptions)
    })
}

// function toolList(tools) {
//     tools.forEach(tool => {
//         const toolOptions = document.createElement('option')
//         toolOptions.innerText = tool.name
//         toolOptions.value = tool.id
//         toolDropdown.append(toolOptions)
//     })
// }

const toolButton = document.createElement('button')
toolButton.innerHTML = `<a href='tool.html'></a>`
button.append(toolButton)
