const toolDropdown = document.querySelector('#tool-dropdown')

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