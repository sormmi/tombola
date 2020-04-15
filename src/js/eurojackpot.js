const Eurojackpot = () => {

  let nums = [];

  while (true) {
    let newNum = Math.floor(Math.random() * 50) + 1;

    if (nums.includes(newNum)) continue;

    nums.push(newNum);

    if (nums.length === 5) {

      nums.sort((a, b) => a - b);

      let stars = [];

      while (true) {
        let starNum = Math.floor(Math.random() * 10) + 1;
        if (stars.includes(starNum)) continue;

        stars.push(starNum);

        if (stars.length === 2) {
          stars.sort((a, b) => a - b);
          nums.push(stars[0]);
          nums.push(stars[1]);
          break;
        }
      }
      break;
    }
  }
  return nums;
}

export default Eurojackpot;

