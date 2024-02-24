/* Data Types:
undefined, null, boolean, string, symbol, number and object
* */

var myName = "Berkay"

myName = 8

let ourName = "coding" // will only be used within the scope where has been declared

const pi = 3.14 // can never change

var a;

console.log(a); // undefined

// basic operations
var b = 2;

a = 7;

b = a;

console.log(a);
console.log(b);

a = a + 5;
b = b + 7;
var c = "I am a";
c = c + " String";

console.log(a);
console.log(b);
console.log(c);

a++;
b--;

console.log(a);
console.log(b);

console.log(2.0*2.5);

console.log(4%3);

a+=5;
b-=5;
console.log(a);
console.log(b);


// escape character \
console.log("\"double quoted string\"");

// strings with single quotes
console.log('"double quoted string"');

// escape characters
var myVar = "First Line\n\t\\Second Line\nThird Line";
console.log(myVar);

// length of a string
var str = "Learning!";
console.log(str.length);

// indexes of strings
console.log(str[0]);
console.log(str[8]);
console.log(str[str.length-1]);
console.log(str[str.length-2]);

// strings are immutable
str[0] = "l"; // this does not work
str = "learning!"
console.log(str);