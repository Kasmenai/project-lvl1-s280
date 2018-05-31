import { getRandomNum, makeAnswerQuestionPair } from '../common';
import { playGame } from '..';

const isEven = num => num % 2 === 0;

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';

  const answerQuestionGenerator = () => {
    const question = getRandomNum(1, 100);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    return makeAnswerQuestionPair(`${question}`, rightAnswer);
  };

  playGame(description, answerQuestionGenerator);
};
