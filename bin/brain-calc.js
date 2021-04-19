#!/usr/bin/env node
import readlinSync from 'readline-sync';
import { getName, getRandom } from '../src/cli.js';

let index = 1;
let key = true;
const operations = ['+', '-', '*'];

console.log('Welcome to the Brain Games!');

const name = getName();
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');
while (key && index <= 3) {
    const a = getRandom();
    const b = getRandom();
    const operand = operations[getRandom(3)];

    console.log(`Question: ${a} ${operand} ${b}`);
    
}
