let array = [2,4,6,8];
let squareArray = [];

array.forEach((i) => {
    squareArray.push(i*i);
});
console.log(squareArray);


// using map

let num = [2,4,6,8];
let squareNum = num.map((i) => {
    return i*i;
});
console.log(squareNum);


// using filter

let number = [1,2,3,4,5,6,7,8,9];
let evenNUmber = number.filter((i) => {
    return i % 2 === 0;
});
console.log(evenNUmber);



