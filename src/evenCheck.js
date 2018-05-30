import readlineSync from 'readline-sync';

const roundsCount = 3;
const getRandomNum = (min, max) => Math.round((Math.random() * (max - min)) + min);
const isEven = num => num % 2 === 0;

const evenCheck = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const iter = (currentRound) => {
    if (currentRound === roundsCount) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const randomNum = getRandomNum(1, 100);
    console.log(`Question: ${randomNum}`);
    const actualAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = isEven(randomNum) ? 'yes' : 'no';
    if (actualAnswer === rightAnswer) {
      console.log('Correct!');
      iter(currentRound + 1);
    } else {
      console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  iter(0);
};

export default evenCheck;
