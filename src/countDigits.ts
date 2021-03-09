export const countDigits = (str: any) : number=> {
  let count = 0;
  for (let c of str) {
    if (/[0-9]/.test(c)) ++count;
  }
  
  return count;
}