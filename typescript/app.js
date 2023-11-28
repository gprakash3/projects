"use strict";
const num1Elements = document.getElementById('num1');
const num2Elements = document.getElementById('num2');
const buttonElements = document.querySelector('button');
const numResult = [];
const textResult = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElements.addEventListener('click', () => {
    const num1 = num1Elements.value;
    const num2 = num2Elements.value;
    const result = add(+num1, +num2);
    numResult.push(result);
    const stringResult = add(num1, num2);
    textResult.push(stringResult);
    console.log(result);
    console.log(numResult, textResult);
    printResult({ val: result, timestamp: new Date() });
});
const myPromsie = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});
myPromsie.then((result) => {
    console.log(result.split('w'));
});
