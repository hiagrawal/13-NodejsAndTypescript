"use strict";
const num1Element = document.getElementById("num1");
//here we need to give as HTMLInput Element since it can be any html element by default and if we dont define 
//then when we access it's value using .value, it gives an error since it does not know it is an input type element
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
//button button is always an htmlButtonElement hence we dont need to give it explicitely and it took buttonType on its own
//const numResults: number[] = [];
const numResults = [];
const stringResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2;
    }
    return +num1 + +num2;
}
//console.log(add(1,2));
// console.log(add('1','2'));
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    //now we defined the type in add function that it has to be number, when we pass like this, it gives us an error 
    //during development/compile time only that it is of type string since it is taking its value from html element 
    //which always returns a string and hence by using typescript saved us from runtime error
    //and to fix, we added '+' sign which converted string to number
    console.log(result);
    numResults.push(result);
    console.log(numResults);
    const stringResult = add(num1, num2);
    console.log(stringResult);
    stringResults.push(stringResult);
    console.log(stringResults);
    console.log(printResult({ val: result, timestamp: new Date() }));
});
//it is a promise type and holds value as string so string is its generic type
var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked');
    }, 1000);
});
//so now it knows that result will always be a string and hence can use split function
promise.then(result => {
    console.log(result.split(' '));
});
