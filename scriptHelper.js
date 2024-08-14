// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML =` <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">`
    
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }
 
 function formSubmission(document,list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
 
    let copilotStatus = document.getElementById("copilotStatus");
    let faultyItems = document.getElementById("faultyItems");
    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus")
    let cargoStatus = document.getElementById("cargoStatus");


    if(validateInput(pilot) ==='Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        alert("All fields are required");
    } else if (validateInput(fuelLevel) ==='Not a Number' || validateInput(cargoLevel) ==='Not a Number') {
        alert("Fuel level and Cargo Mass should be numbers")
    } else if (validateInput(pilot) ==='Is a Number' || validateInput(copilot) ==="Is a Number") {
        alert("Pilot name and Co-Pilot Name cannot be numbers")
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready!`;
        copilotStatus.innerHTML = `Copilot ${copilot} is ready!`;

        if (Number(fuelLevel) < 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML =`Fuel level not high enough`;
            launchStatus.innerHTML = `Shuttle Not ready for Launch`;
            launchStatus.style.color = 'red';
        } else if (Number(cargoLevel > 10000)) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML =`Cargo level is too high`;
            launchStatus.innerHTML = `Shuttle not Ready for Launch`;
            launchStatus.style.color = 'red'; 
        } else {
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = 'green';
        }
    }


 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;