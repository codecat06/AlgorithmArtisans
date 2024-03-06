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

// spread operator = ...
// copies the content of an array
const arr1 = ["a", "b", "c", "d"];
let arr2;
arr2 = arr1;
arr1[0] = "0";
console.log(arr2); // changed a to 0 because it did not copy the contents of arr1
let arr3;
arr1[0] = "a";
arr3 = [...arr1];
arr1[0] = "0";
console.log(arr3); // copied arr1

// destructuring assignment
const [z,x, , y] =[1, 2, 3, 4, 5, 6]; // you cannot directly assign wanted index
                                                                // however you can put commas to reach the
                                                                // wanted index.
console.log(z,x,y); // 1 2 4

// switching variables values
let a = 6; let b = 8;
[a,b] = [b,a];
console.log(a,b); // 8 6

// using rest operator with spread operator
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const [ , , ...array2] = array1; // removes first two elements of array1
console.log(array2);


