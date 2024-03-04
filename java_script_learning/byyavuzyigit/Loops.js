var myArray = [];
var i = 0;
while(i < 5){
    myArray.push(i);
    i++;
}
console.log(myArray);

for(var j = 0; j<5; j++){
    myArray[j]+=j;
}
console.log(myArray);

var evenArray = [];
for(var k=0; k<=10; k+=2){
    evenArray.push(k);
}
console.log(evenArray);

var total = 0;
for(var z=0; z<evenArray.length; z++){
    total += evenArray[z];
}
console.log(total);

function multiplyAll(arr){
    var product = 1;
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            product*=arr[i][j];
        }
    }
    return product;
}
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

var count = 10;
do{
    count++;
}while(count < 5)
console.log(count);