import readlineSync from 'readline-sync';

export default () => {
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  return actual;
};

const roundsCount = 3;
const getRandomNum = (min, max) => Math.round((Math.random() * (max - min)) + min);

export const evenCheck = (name, currentRound) => {
  if (currentRound === roundsCount) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const randomNum = getRandomNum(1, 100);
  console.log(`Question: ${randomNum}`);
  const actualAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  if (actualAnswer === rightAnswer) {
    console.log('Correct!');
    evenCheck(name, currentRound + 1);
  } else {
    console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};
