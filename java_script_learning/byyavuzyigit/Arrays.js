// array's elements can be from different data types
var myArray = ["John", 1];
console.log(myArray);

// nested / multi-dimensional arrays
var nestedArray = [myArray, ["Pi", 3.14]];
console.log(nestedArray);

// array indexing
console.log(myArray[0]);
console.log(myArray[1]);

myArray[1] = 45;
console.log(myArray);

console.log(nestedArray[0][1]);
console.log(nestedArray[1][1]);

// push() adding elements to the end of the array
nestedArray.push(5);
console.log(nestedArray);

// pop() removes from end of the array
var removing = nestedArray.pop();
console.log(nestedArray);
console.log(removing);

// shift() removes from the beginning of the array
var beginRemove = nestedArray.shift();
console.log(nestedArray);
console.log(beginRemove);

// unshift() adds an element to the beginning of the array
nestedArray.unshift(beginRemove);
console.log(nestedArray);
