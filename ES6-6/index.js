// For Loop

let array = [10,20,30,40];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
};


// for each

let arr = [10,20,30,40];
arr.forEach(newArray);

function newArray(i){
    console.log(i);
};


// for each new array push

let newarray = [10,20,30,40];
let squareArray = [];

newarray.forEach(function(i){
    squareArray.push(i*i);
    
})
console.log(squareArray);



// array add 5

let number = [10,20,30,40];
number.forEach(function(i,index,array){
    array[index] = i+5;
})
console.log(number);


// use es6 function

let numbers = [10,20,30,40];
numbers.forEach((i,index,array) => {
    array[index]=i+10;
});
console.log(numbers);
