function threeWords(str: string) {
  let arr: any = [...str.split(' ')]
  console.log(arr);
  let count: number = 0;

  for (let el of arr) {
    (!isNaN(el)) ? count = 0 : count += 1;
    if (count === 3) return true;
  }
  return false;
}

export default threeWords;