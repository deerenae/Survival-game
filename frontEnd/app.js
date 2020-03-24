fetch('http://localhost:3000/shelters')
.then(response => response.json())
.then(console.log)