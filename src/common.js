export const getRandomNum = (min, max) =>
  Math.floor((Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min));

export const makeAnswerQuestionPair = (question, answer) => {
  const pair = (message) => {
    switch (message) {
      case 'getQuestion':
        return question;
      case 'getAnswer':
        return answer;
      default:
        return '';
    }
  };
  return pair;
};
