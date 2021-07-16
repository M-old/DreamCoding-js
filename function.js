'use strict';
// Default parameters
function showMessage(message, from ='unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('hi');


// Rest parameters
function printAll(...args) {
    for (let i=0; i<args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }
}
printAll('dream', 'coding', 'woong');

// Early return, early exit
// bad logic
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrand logic...
    }
}
//good logic
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// anonymous function
const print = function() {
    console.log('print');
};
print();
const printAgain = print;
printAgain();

// Arrow function
// always anonymous
const simplePrint1 = function () {
    console.log('simplePrint!');
};


const simplePrint2 = () => console.log('simplePrint!');
const add = (a,b) => a + b;

//IIFE
(function hello() {
    console.log('IIFE');
})();

//quiz
function calculate(command, a, b) {
    if(command === 'add') {
        console.log(a+b);
    }else if(command === 'substract') {
        console.log(a-b);
    }else if(command === 'divide') {
        console.log(a/b);
    }else if(command === 'multiply') {
        console.log(a*b);
    }else if(command === 'remainder') {
        console.log(a%b);
    }
    
}