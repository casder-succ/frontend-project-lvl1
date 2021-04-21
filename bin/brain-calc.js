#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName, getRandom } from '../src/cli.js';

const index = 1;
let key = true;
let result;
const operations = ['+', '-', '*'];

console.log('Welcome to the Brain Games!');

const name = getName();
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');
while (key && index < 3) {
  const a = getRandom();
  const b = getRandom();
  const operand = operations[getRandom(3)];

  console.log(`Question: ${a} ${operand} ${b}`);

  switch (operand) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      break;
  }

  const answer = readlineSync.question('Your answer: ');
  if (+answer === result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
    console.log(`Let's try again, ${name}!`);
    key = false;
  }
}

if (key) {
  console.log(`Congratulations, ${name}!`);
}
