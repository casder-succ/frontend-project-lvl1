#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getName, getRandom, getProgression } from '../src/cli.js';

let index = 1;
let key = true;

console.log('Welcome to the Brain Games!');

const name = getName();
console.log(`Hello, ${name}!`);

console.log('What number is missing in the progression?');
while (key && index <= 3) {
  const a = getRandom(10);
  const b = getRandom(5);

  const progrElem = getProgression(a, b);

  const someIndex = getRandom(10);
  const elem = progrElem[someIndex];

  progrElem[someIndex] = '..';

  console.log(`Question: ${progrElem.join(' ')}`);

  const answer = readlineSync.question('Your answer: ');

  if (+answer === elem) {
    console.log('Correct!');
    index += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${elem}'.`);
    console.log(`Let's try again, ${name}!`);
    key = false;
  }
}

if (key) {
  console.log(`Congratulations, ${name}!`);
}
