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



