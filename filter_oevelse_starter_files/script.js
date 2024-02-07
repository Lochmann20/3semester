document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", btnFilterEVTListener);
});

function btnFilterEVTListener(evt) {
  console.log(evt.currentTarget);

 if (evt.currentTarget.dataset.filter === "all") {
  showTheseVehicles(vehicles);
 } else if (evt.currentTarget.dataset.filter === "electric") {
  showTheseVehicles(vehicles.filter(isElectric));
 } else if (evt.currentTarget.dataset.filter === "more_than_two_seats") {
  showTheseVehicles(vehicles.filter(hasMoreThanTwoSeats));
 } else if (evt.currentTarget.dataset.filter === "Jonas") {
  showTheseVehicles(vehicles.filter(jonas));
 }
}



const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");

function isElectric(vehicles) {
  if(vehicles.isElectric === true) {
    return vehicles;
  }
}
function hasMoreThanTwoSeats(vehicle) {
    if(vehicle.passengers > 1) {
      return vehicle;
    }
  }

  function jonas(vehicles) {
  if (vehicles.isElectric === true && vehicles.ownedBy === "Jonas") {
    return vehicles;
  }
}


// const allElectric = vehicles.filter(isElectric);
// const vehiclemoreThanTwoSeats = vehicles.filter(hasMoreThanTwoSeats);
// showTheseVehicles(allElectric);
showTheseVehicles(vehicles);


function showTheseVehicles(arr) {
  ulPointer.innerHTML = "<li><strong>type</strong></li><li><strong>fuel</strong></li><li><strong>passengers</strong></li><li><strong>stops</strong></li><li><strong>ownedBy</strong></li><li><strong>isElectric</strong></li><li><strong>isTandem</strong></li>";
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric ? "X" : ""}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem ? "X" : ""}</li>`;
  });
}








































// opgave 1.1
// en der viser alle el drevne fartøjer
// ved brug af denne is-function vælger vi at vi kun vil have vist alle de køretøjer som er elektriske
// function isElectric(vehicles) {
//   if(vehicles.isElectric === true) {
//     return vehicles;
//   }
// }
// const allElectric = vehicles.filter(isElectric);
// showTheseVehicles(allElectric);



// opgave 1.2
// en der viser alle fartøjer med mere end 2 sæder
// function hasMoreThanTwoSeats(vehicle) {
//     if(vehicle.passengers > 1) {
//       return vehicle;
//     }
//   }

//   const vehiclemoreThanTwoSeats = vehicles.filter(hasMoreThanTwoSeats);
//   showTheseVehicles(vehiclemoreThanTwoSeats);


// opgave 1.3
// alle fartøjer el-drevne fartøjer ejet af Jonas
// function ownedByJonas(vehicles) {
//   if (vehicles.ownedBy === "Jonas") {
//     return vehicles;
//   }
// }

// const vehiclesOwnedBy = vehicles.filter(ownedByJonas);
// showTheseVehicles(vehiclesOwnedBy);


// opgave 1.4
// alle rugbrøds drevne fartøjer med plads til mere end en
// function ownedByVingegård(vehicles) {
//   if (vehicles.ownedBy === "Vingegård") {
//     return vehicles;
//   }
// }

// const vehiclesOwnedBy = vehicles.filter(ownedByVingegård);
// showTheseVehicles(vehiclesOwnedBy);



//opgave 2
// Lav nogle if statements i showTheseVehicles funktionen så tabellen bliver smukkere: uden undefined og tomme felter og true;
// function stops(vehicles) {
//   if(stops === "Nørrebrogade", "Elmegade") {
//     stops === true;
//   } else {
//     (stops === "") {
//       stops === ""
//     };
//   }
// }

// const vehiclesStops = vehicles.filter(stops);
// showTheseVehicles(vehiclesStops);












// let result;
  // if (vehicles.undefined > undefined) {
  //   result = "0";
  // } else {
  //   result = "undefined";
  // }
  // return result;








