'use strict';
// string concatenation
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text} type: ${typeof(text)}`);
text = 1;
console.log(`value: ${text} type: ${typeof(text)}`);
text = '7' + 5;
console.log(`value: ${text} type: ${typeof(text)}`);
text = '8' / '2';
console.log(`value: ${text} type: ${typeof(text)}`);
//error! console.log(text.charAt(0));

// == loose equality
const stringFive = '5';
const numberFive = 5;
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// === strict equality
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// object equality
const woong1 = {name: 'woong'};
const woong2 = {name: 'woong'};
const woong3 = woong1;
console.log(woong1 == woong2); //false
console.log(woong1 === woong2); //false
console.log(woong1 === woong3); //true

// equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //ture
console.log(null === undefined); //false

// Ternary operator: ?

//Quiz
/*
for(let i =1; i<10; i++) {
    if(i%2 !== 0) {
        continue;
    }
    for(let j = 1; j<10; j++) {
        if(j%2 !== 0) {
            continue;
        }
        console.log(`i: ${i}, j:${j}`);
    }
}
console.log("helloWorld!");

for(let i =0; i<10; i++) {
    if(i > 8) {
        break;
    }
    for(let j = 0; j<10; j++) {
        if(j > 8) {
            break;
        }
        console.log(`i: ${i}, j:${j}`);
    }
}
*/