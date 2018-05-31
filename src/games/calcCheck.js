import { getRandomNum, makeAnswerQuestionPair } from '../common';
import playGame from '..';

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

export default () => {
  const description = 'What is the result of the expression?';

  const answerQuestionGenerator = () => {
    const firstNum = getRandomNum(1, 5);
    const secondNum = getRandomNum(1, 10);
    const operation = getRandomOperation();
    const question = `${firstNum} ${operation} ${secondNum}`;
    const rightAnswer = String(calcResult(firstNum, operation, secondNum));
    return makeAnswerQuestionPair(question, rightAnswer);
  };

  playGame(description, answerQuestionGenerator);
};
