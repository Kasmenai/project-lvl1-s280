import { getRandomNum, makeAnswerQuestionPair } from '../common';
import playGame from '..';

const gcd = (a, b) => {
  if (a === b) {
    return a;
  }
  return a > b ? gcd(a - b, b) : gcd(a, b - a);
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const answerQuestionGenerator = () => {
    const firstNum = getRandomNum(1, 20);
    const secondNum = getRandomNum(1, 50);

    const question = `${firstNum} ${secondNum}`;
    const rightAnswer = String(gcd(firstNum, secondNum));

    return makeAnswerQuestionPair(`${question}`, rightAnswer);
  };

  playGame(description, answerQuestionGenerator);
};
