"use strict";

const input = document.getElementById('input'), // input/output button
    numbers = document.querySelectorAll('.numbers div'), // number buttons
    operators = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons

numbers.forEach(function(number){
    number.addEventListener('click', function() {
        input.innerHTML += this.innerHTML;
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];
        console.log(currentString);
        console.log(lastChar);
    });
});

// adding click handlers to the operation buttons

operators.forEach(function(operator){
    operator.addEventListener('click', function() {
        // input.innerHTML += this.innerHTML;  #this made the function not work
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];
        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷"){
            let newString = currentString.substring(0, currentString.length - 1) + this.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0){
            console.log("enter a number first");
        } else {
            input.innerHTML += this.innerHTML;
        }
        console.log(currentString);
        console.log(lastChar);
    });
});

// on click of 'equal' button

result.addEventListener('click', function() {
    input.innerHTML = '';
});

// clearing the input on press of clear

clear.addEventListener('click', function() {
    input.innerHTML = '';
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