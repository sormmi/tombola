const Vakio = () => {

  let nums = [];

  while (true) {
    let newNum = Math.floor(Math.random() * 3);
    switch (newNum) {
      case 0:
        nums.push(1);
        break;
      case 1:
        nums.push('X');
        break;
      case 2:
        nums.push(2);
        break;
      default: break;
    }

    if (nums.length === 13) {
      break;
    }
  }
  return nums;
}

export default Vakio;
