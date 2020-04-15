const Jokeri = () => {

  let nums = [];

  while (true) {
    let newNum = Math.floor(Math.random() * 10);
    nums.push(newNum);

    if (nums.length === 7) {
      break;
    }
  }
  return nums;
}

export default Jokeri;
