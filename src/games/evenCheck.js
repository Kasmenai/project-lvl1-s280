import { getRandomNum, makeAnswerQuestionPair } from '../common';

const isEven = num => num % 2 === 0;

export default (msg) => {
  if (msg === 'getDescription') {
    return 'Answer "yes" if number even otherwise answer "no".';
  }
  const question = getRandomNum(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return makeAnswerQuestionPair(`${question}`, rightAnswer);
};
