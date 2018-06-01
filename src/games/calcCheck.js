import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playGame from '..';

const description = 'What is the result of the expression?';

const answerQuestionGenerator = () => {
  const firstNum = getRandomNum(1, 5);
  const secondNum = getRandomNum(1, 10);
  switch (getRandomNum(0, 3)) {
    case 0:
      return cons(`${firstNum} + ${secondNum}`, `${firstNum + secondNum}`);
    case 1:
      return cons(`${firstNum} - ${secondNum}`, `${firstNum - secondNum}`);
    case 2:
      return cons(`${firstNum} * ${secondNum}`, `${firstNum * secondNum}`);
    default:
      return cons(`${firstNum} + ${secondNum}`, `${firstNum + secondNum}`);
  }
};

export default () => playGame(description, answerQuestionGenerator);
