import play from '../index.js';
import randomNum from '../random-num.js';

const doesRandomNumberIsEven = (num) => {
  const isEven = num % 2 === 0;
  return isEven ? 'yes' : 'no';
};

const brainEven = () => {
  const num = randomNum();
  const question = `${'Question: '}${num}`;

  const result = doesRandomNumberIsEven(num);
  return { result, question };
};
const playBrainEven = () => {
  play(brainEven, 'Answer "yes" if the number is even, otherwise answer "no".');
};
export default playBrainEven;
