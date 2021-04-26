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
