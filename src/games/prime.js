import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playGame from '..';

const description = 'Is this number prime?';

const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return 'no';
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const answerQuestionGenerator = () => {
  const question = getRandomNum(0, 200);
  const rightAnswer = isPrime(question);
  return cons(`${question}`, rightAnswer);
};

export default () => playGame(description, answerQuestionGenerator);
