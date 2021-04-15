#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandom, getName } from '../src/cli.js';

let index = 1;
let key = true;

console.log('Welcome to the Brain Games!');

const name = getName();
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
while (key && index <= 3) {
  const num = getRandom();
  const dif = num % 2 === 0 ? 'yes' : 'no';
  const difOther = num % 2 === 0 ? 'no' : 'yes';
  console.log('Question: ', num);

  const answer = readlineSync.question('Your answer: ');
  console.log('Your answer: ', answer);
  if (answer === dif) {
    console.log('Correct');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${difOther}.`);
    key = false;
  }

  index += 1;
}

console.log(key ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
