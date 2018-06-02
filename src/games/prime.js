import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playGame from '..';

const description = 'Is this number prime?';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const answerQuestionGenerator = () => {
  const question = getRandomNum(0, 200);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(`${question}`, rightAnswer);
};

export default () => playGame(description, answerQuestionGenerator);
