import { getRandomNum, makeAnswerQuestionPair } from '../common';
import playGame from '..';

const getMinValueInd = (str) => {
  let index = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] < str[index]) {
      index = i;
    }
  }
  return index;
};

const getMaxValueInd = (str) => {
  let index = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] > str[index]) {
      index = i;
    }
  }
  return index;
};

const sort = (str, result) => {
  if (str.length === 0) {
    return result;
  }
  const indMin = getMinValueInd(str);
  let lastStr = '';
  for (let i = 0; i < str.length; i += 1) {
    lastStr += i === indMin ? '' : str[i];
  }
  return sort(lastStr, result + str[indMin]);
};

const balance = (num) => {
  const strNum = String(num);
  const maxInd = getMaxValueInd(strNum);
  const minInd = getMinValueInd(strNum);
  const delta = strNum[maxInd] - strNum[minInd];

  if (delta <= 1) {
    return sort(strNum, '');
  }

  let result = '';
  for (let i = 0; i < strNum.length; i += 1) {
    if (i === maxInd) {
      result += (Number(strNum[i]) - 1);
    } else if (i === minInd) {
      result += (Number(strNum[i]) + 1);
    } else {
      result += strNum[i];
    }
  }

  return balance(result);
};


export default () => {
  const description = 'Balance the given number.';

  const answerQuestionGenerator = () => {
    const question = getRandomNum(100, 10000);
    const rightAnswer = String(balance(question));
    return makeAnswerQuestionPair(`${question}`, rightAnswer);
  };

  playGame(description, answerQuestionGenerator);
};
