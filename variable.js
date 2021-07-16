/*
1.  Use strict
    added in ES 5
    use this for Vanilla Javascript.
*/
'use strict';
{
    let name1 = 'woong';
    console.log(name1);
    name1 = 'hello';
    console.log(name1);
}

//template literal && symbol
const brendan = 'brendan';
const hellobob = `hi ${brendan}!`;
console.log(`value: ${hellobob} type: ${typeof(hellobob)}`);
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof(symbol1)}`);


//object
const woong = {name: 'woong', age: 20};
console.log(woong.name);

