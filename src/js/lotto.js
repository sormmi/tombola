const Lotto = () => {

  let nums = [];

  while (true) {
    let newNum = Math.floor(Math.random() * 40) + 1;

    if (nums.includes(newNum)) continue;

    nums.push(newNum);

    if (nums.length === 7) {
      nums.sort((a, b) => a - b);
      break;
    }
  }
  return nums;
}

export default Lotto;
