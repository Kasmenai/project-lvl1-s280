import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsCount = 3;

export default (gameDescription, answerQuestionGenerator) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const iter = (currentRound) => {
    if (currentRound === roundsCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const newAnswerQuestionPair = answerQuestionGenerator();
    const question = car(newAnswerQuestionPair);
    const rightAnswer = cdr(newAnswerQuestionPair);

    console.log(`Question: ${question}`);
    const actualAnswer = readlineSync.question('Your answer: ');
    if (actualAnswer === rightAnswer) {
      console.log('Correct!');
      iter(currentRound + 1);
    } else {
      console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
    }
  };
  iter(0);
};
