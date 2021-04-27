import readlineSync from 'readline-sync';

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');

  return name;
};

export const getRandom = (max = 100) => Math.floor(Math.random() * max + 1);

export const getOperation = (a, b, operand) => {
  let result;
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
  return result;
};

export const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a > 0 && b > 0) {
    if (a > b) {
      a = Math.floor(a % b);
    } else {
      b = Math.floor(b % a);
    }
  }
  return a + b;
};

export const getProgression = (num1, q) => {
  const progression = [];
  let b = num1;

  for (let i = 0; i < 10; i += 1) {
    progression.push(b);
    b += q;
  }

  return progression;
};

export const isPrime = (num) => {
  let key = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      key += 1;
    }
  }

  if (key === 2) {
    return 'yes';
  }
  return 'no';
};
