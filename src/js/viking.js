const Viking = () => {

  let nums = [];

  while (true) {
    let newNum = Math.floor(Math.random() * 48) + 1;

    if (nums.includes(newNum)) continue;

    nums.push(newNum);

    if (nums.length === 6) {

      nums.sort((a, b) => a - b);

      let extraNum = Math.floor(Math.random() * 8) + 1;

      nums.push(extraNum);

      break;
    }
  }
  return nums;
}

export default Viking;
