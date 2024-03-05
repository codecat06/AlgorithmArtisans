function reusableFunction(){
    console.log('"Hello, World!"');
}
function subtract(a, b){
    console.log(a-b);
}

reusableFunction();
reusableFunction();

subtract(10, 20);


// scope of variables

// global scope
var myGlobal = 10;

function func1(){
    // if you do not assign using " var " this variable will become global
    oopsGlobal = 5;
}

function func2(){
    var output = "";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

func1();
func2();


function funcLocalScope(){
    // this variable's scope is local because it assigned using var
    var myVar = 5;
    console.log(myVar);
}
funcLocalScope();
//console.log(myVar); gives an error

// local and global variables can have the same name

var myNumber = 10;
function number(){
    var myNumber = 5;
    return myNumber;
}
console.log(number()); // prints 5
console.log(myNumber); // prints 10

function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// random decimal number generator
console.log(Math.random()); // generates decimal numbers between 0 and 1 (can be 0, cannot be 1)
console.log(Math.floor(Math.random() * 20)); // generates whole numbers (in this case 0-19)

// parseInt function
console.log(parseInt("56") + parseInt("24"));
// turning string to an int with a base
console.log(parseInt("10011",2)); // returns 19

// arrow functions
const magic = () => 10; // you can write return 10 too
console.log(magic()); // returns 10

const arrConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(arrConcat([1, 2], [3, 4, 5]));

// filter and map functions
const realNumbers = [4, 5.6, -9.8, -3, 42, 6, 9.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squaredIntegers;
}
console.log(squareList(realNumbers));

// rest operator = ...
const sum = (function(){
    return function sum(... args){
        return args.reduce((a,b) => a + b ,0);
    };
})();
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5));


