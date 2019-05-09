"use strict";

const input = document.getElementById('input'), // input/output button
    numbers = document.querySelectorAll('.numbers div'), // number buttons
    operators = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons

Array.from(numbers).map(number => {
    number.addEventListener('click', function() {
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];
        if (resultDisplayed === false) {
            input.innerHTML += this.innerHTML;
        } else if (
            (resultDisplayed === true && lastChar === "+") ||
            (resultDisplayed === true && lastChar === "-") ||
            (resultDisplayed === true && lastChar === "*") ||
            (resultDisplayed === true && lastChar === "/") 
        )
        { 
            resultDisplayed = false;
            input.innerHTML += this.innerHTML;
        } else {
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += this.innerHTML;
        }
        console.log(lastChar);
    });
});

// numbers.forEach(function(number){
//     number.addEventListener('click', function() {
//         input.innerHTML += this.innerHTML;
//         let currentString = input.innerHTML;
//         let lastChar = currentString[currentString.length - 1];
//         console.log(currentString);
//         console.log(lastChar);
//     });
// });

// adding click handlers to the operation buttons

operators.forEach(function(operator){
    operator.addEventListener('click', function() {
        // input.innerHTML += this.innerHTML;  #this made the function not work
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
            let newString = currentString.substring(0, currentString.length - 1) + this.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0){
            console.log("enter a number first");
        } else {
            input.innerHTML += this.innerHTML;
        }
        console.log(lastChar);
    });
});

// on click of 'equal' button

result.addEventListener('click', function() {
    const currentString = input.innerHTML;
    console.log("curentString = ", currentString);

    const numberStringArray = currentString.split(/\+|\-|\*|\//g);
    console.log("numberStringArray= ", numberStringArray);

    let numbersArray = [];
    // Loop through the numberStringArray, and convert the string to int and write to a new array

    numberStringArray.forEach(function(number){
        numbersArray.push(Number(number));
    });
    console.log("numbersArray =", numbersArray);

    const operatorsArray = currentString.replace(/[0-9]|\./g, "").split("");
    console.log("operatorsArray= ", operatorsArray);

    // We need 4 while loops to do the math
    let multiply = operatorsArray.indexOf("*");
    console.log("operatorsArray.indexOf('*')=",operatorsArray.indexOf("*"))
    console.log("multiply =", multiply)

    while (multiply != -1) {
        //array.splice(start, deleteCount, value);
        numbersArray.splice(multiply, 2, numbersArray[multiply] * numbersArray[multiply + 1]);
        operatorsArray.splice(multiply,1);
        multiply = operatorsArray.indexOf("*");
        console.log("multiply =", multiply)
    }

    let divide = operatorsArray.indexOf("/");
    while (divide != -1) {
        numbersArray.splice(divide, 2, numbersArray[divide] / numbersArray[divide + 1]);
        operatorsArray.splice(divide, 1);
        divide = operatorsArray.indexOf("/")
    }

    let add = operatorsArray.indexOf("+");
    while (add != -1) {
        numbersArray.splice(add, 2, numbersArray[add] + numbersArray[add + 1]);
        operatorsArray.splice(add, 1);
        add = operatorsArray.indexOf("+");
    }

    let subtract = operatorsArray.indexOf("-");
    while (subtract != -1) {
        numbersArray.splice(subtract, 2, numbersArray[subtract] - numbersArray[subtract + 1]);
        operatorsArray.splice(subtract, 1);
        subtract = operatorsArray.indexOf("-");
    }
    resultDisplayed = true;
    input.innerHTML = numbersArray;

    console.log(numbersArray);
    // console.log('=');
});

// clearing the input on press of clear

clear.addEventListener('click', function() {
    input.innerHTML = '';
    console.log('c');
});

    /*
    (/\+|\-|\×|\÷/g)

    // use like this:
    const someVariable = someString.split(/\+|\-|\×|\÷/g);
    */


//    const string = "12 +";
//    const lastCharacter = string[string.length - 1];
//    console.log(lastCharacter);
//    const mathString = "12+2+3-4";
//    const numbers = mathString.split(/\+|\-|\Ã|\Ã·/g);
//    console.log(numbers);
//    const months = ['Jan', 'March', 'April', 'June'];
//    // array.splice(start, deleteCount, item);
//    // inserts at index 1
//    months.splice(1, 0, 'Feb');
//    months.splice(4, 0, 'May');
//    console.log(months);
//    // replaces 1 element at index 4
//    months.splice(5, 1, 'July');
//    console.log(months);
//    const firstMonth = months.indexOf('April');
//    console.log(firstMonth);