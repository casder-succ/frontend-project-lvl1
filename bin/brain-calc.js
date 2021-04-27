#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName, getRandom, getOperation } from '../src/cli.js';

let index = 1;
let key = true;
let result;
const operations = ['+', '-', '*'];

console.log('Welcome to the Brain Games!');

const name = getName();
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');
while (key && index <= 3) {
  const a = getRandom(20);
  const b = getRandom(20);
  const operand = operations[getRandom(3) - 1];

  console.log(`Question: ${a} ${operand} ${b}`);

  result = getOperation(a, b, operand);

  const answer = readlineSync.question('Your answer: ');
  if (+answer === result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
    console.log(`Let's try again, ${name}!`);
    key = false;
  }

  index += 1;
}

if (key) {
  console.log(`Congratulations, ${name}!`);
}
