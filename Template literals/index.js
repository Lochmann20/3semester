const aName = "Peter Heronimous Lind";

const firstName = aName.substring(0, aName.indexOf(" "));
console.log("firstName", firstName + "_");

const middelName = aName.substring(aName.indexOf(" ") + 1, aName.lastIndexOf(" "));
console.log("middelName", "_" + middelName + "_");

const lastName = aName.substring(aName.lastIndexOf("") + 1);
console.log(`aName.lastIndexOf(" ")`, aName.lastIndexOf(" "));



console.log("lastName", "_" + lastName + "_");
console.log(aName.split(" "));

const firstNameSplit = aName.split(" ")[0];
console.log("firstNameSplit", firstNameSplit);


