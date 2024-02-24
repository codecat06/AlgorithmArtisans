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
