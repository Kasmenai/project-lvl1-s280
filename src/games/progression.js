import { cons } from 'hexlet-pairs';
import getRandomNum from '../common';
import playGame from '..';

const description = 'What number is missing in this progression?';

const elementsCount = 10;

const getProgressionItem = (firstNum, delta, i) => firstNum + ((i - 1) * delta);

const answerQuestionGenerator = () => {
  const firstNum = getRandomNum(1, 50);
  const delta = getRandomNum(1, 10);
  const hiddenIndex = getRandomNum(2, elementsCount);
  let question = `${firstNum}`;
  for (let i = 2; i <= elementsCount; i += 1) {
    question += i === hiddenIndex ? ' ..' : ` ${getProgressionItem(firstNum, delta, i)}`;
  }
  const rightAnswer = `${getProgressionItem(firstNum, delta, hiddenIndex)}`;
  return cons(question, rightAnswer);
};

export default () => playGame(description, answerQuestionGenerator);
