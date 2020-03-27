const getShelter= localStorage.getItem("shelter")
const getTool = localStorage.getItem("tool")
const shelterValue = parseInt(getShelter)
const toolValue = parseInt(getTool)
    console.log(shelterValue)
    console.log(toolValue)
    console.log(shelterValue + toolValue > 14)
 if (shelterValue + toolValue > 12) {
    document.getElementById("your-fate").innerHTML += "<p>YOU SURVIVED 2020!</p>";
 } else {
        document.getElementById("your-fate").innerHTML += "<p>YOU DID NOT SURVIVE 2020 ;(</p>";
}
