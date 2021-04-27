#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getName, getRandom, isPrime } from '../src/cli.js';

let index = 1;
let key = true;

console.log('Welcome to the Brain Games!');

const name = getName();
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
while (key && index <= 3) {
  const a = getRandom(100);

  console.log(`Question: ${a}`);
  const answer = readlineSync.question('Your answer: ');

  const result = isPrime(a);

  if (answer === result) {
    console.log('Correct!');
    index += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
    key = false;
  }
}

if (key) {
  console.log(`Congratulations, ${name}!`);
} else {
    console.log(`Let's try again, ${name}!`);
}
