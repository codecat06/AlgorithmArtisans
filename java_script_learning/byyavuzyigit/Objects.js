// dog object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};
var myDog = {
    "name": "Bolt",
    "legs": 3,
    "tails": 2,
    "friends": []
};

// accessing object properties with dot notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "nikes",
    "new shoes": "adidas"
};

console.log(testObj.hat);
console.log(testObj.shirt);
console.log(testObj.shoes);

// you can access the properties with bracket notation too
// however if the property has spaces in it's name you must
// use bracket notation.
console.log(testObj['new shoes']);
console.log(testObj['shoes']);

// chancing property values of objects
testObj.shirt = "t-shirt";
testObj['shoes'] = 'puma';

console.log(testObj.shirt);
console.log(testObj.shoes);

// adding properties to objects
testObj.pants = "jeans";
testObj["car"] = "bmw";

console.log(testObj.pants);
console.log(testObj.car);

// deleting properties of objects
delete testObj.car;
console.log(testObj.car); // undefined

function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };

    result = lookup[val];
    return result;
}

console.log(phoneticLookup("charlie"));

// checking if the object has the property
console.log(testObj.hasOwnProperty("shirt"));
console.log(testObj.hasOwnProperty("car"));

// profile lookup example

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristan",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
    for(var i=0; i<contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "No such property.";
        }
    }
    return "No such contact.";
}

console.log(lookUpProfile("Sherlock","likes"));
console.log(lookUpProfile("Sherlock","cars"));
console.log(lookUpProfile("Robert","likes"));

// destructuring assignment
// quicker way to assign variables to some object's properties
var voxel = {x: 3.6, y: 7.4, z: 6.54};
const {x: a, y: b, z: c} = voxel; // a = 3.6, b = 7.4, c = 6.54

// with nested objects:
const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};
const {tomorrow: {max: maxOfTomorrow}} = LOCAL_FORECAST;
console.log(maxOfTomorrow); // 84.6

// using destructuring to pass objects to functions
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
function half({max,min}){
    return (max+min) / 2.0;
}
console.log(stats);
console.log(half(stats));

// putting functions inside objects
const bicycle = {
    gear: 2,
    setGear(newGear){
        this.gear = newGear;
        return this.gear;
    }
};
console.log(bicycle.setGear(3));

// define constructor function
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
};
var zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet);

// with class syntax
class SpaceShip{
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
zeus = new SpaceShip("Jupiter");
console.log(zeus.targetPlanet);

// getters and setters for classes
class Book{
    constructor(author) {
        // _ means private variable
        this._author = author;
    }
    // getter
    get writer(){
        return this._author;
    }
    // setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

function createClass(){
    class Thermostat {
        // accepting temp as F and turning it to C
        constructor(temp) {
            this._temp =  5/9 *(temp-32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}
const Thermostat = createClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature; // uses getter
console.log(temp);
thermos.temperature = 26; // uses setter
temp = thermos.temperature;
console.log(temp);






