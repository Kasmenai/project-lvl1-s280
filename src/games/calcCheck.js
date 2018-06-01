import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playGame from '..';

const description = 'What is the result of the expression?';

const getRandomOperation = () => {
  switch (getRandomNum(0, 3)) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return '+';
  }
};

const calcResult = (num1, operation, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return num1 + num2;
  }
};

const answerQuestionGenerator = () => {
  const firstNum = getRandomNum(1, 5);
  const secondNum = getRandomNum(1, 10);
  const operation = getRandomOperation();
  const question = `${firstNum} ${operation} ${secondNum}`;
  const rightAnswer = String(calcResult(firstNum, operation, secondNum));
  return cons(question, rightAnswer);
};

export default () => playGame(description, answerQuestionGenerator);
