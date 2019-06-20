const greatestDivider = () => {
  const correctAnsverDev = (numOne, numTwo) => {
    let greatDivider = 1;

    for (let i = 2; i <= Math.min(numOne, numTwo); i += 1) {
      if (numOne % i === 0 && numTwo % i === 0) {
        greatDivider = i;
      }
    }
    return greatDivider;
  };

  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);

  console.log(`Question: ${num1} ${num2}`);

  const answer = correctAnsverDev(num1, num2);
  return answer.toString();
};

export default greatestDivider;
