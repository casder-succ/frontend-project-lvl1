#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getName, getRandom, getGcd } from '../src/cli.js';

let index = 1;
let key = true;

console.log('Welcome to the Brain Games!');

const name = getName();
console.log(`Hello, ${name}!`);

console.log('Find the greatest common divisor of given numbers.');
while (key && index <= 3) {
  const a = getRandom(20);
  const b = getRandom(20);

  const result = getGcd(a, b);

  console.log(`Question: ${a} ${b}`);
  const answer = readlineSync.question('Your answer: ');

  if (+answer === result) {
    console.log('Correct!');
    index += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
    console.log(`Let's try again, ${name}!`);
    key = false;
  }
}
if (key) {
  console.log(`Congratulations, ${name}!`);
} else {
    console.log(`Let's try again, ${name}!`);
}
