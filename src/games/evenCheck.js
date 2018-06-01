import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const answerQuestionGenerator = () => {
  const question = getRandomNum(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(`${question}`, rightAnswer);
};

export default () => playGame(description, answerQuestionGenerator);
