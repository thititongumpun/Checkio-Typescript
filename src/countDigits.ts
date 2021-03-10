export const countDigits = (str: string) : number=> {
  let count: number = 0;
  for (let c of str) {
    if (/[0-9]/.test(c)) ++count;
  }
  
  return count;
}