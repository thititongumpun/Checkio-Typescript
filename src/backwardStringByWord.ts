export const backwardStringByWord = (str: string): string => {
  let s: string = str.split(' ').map(el => el.split('').reverse().join('')).join(' ');
  console.log(s);
  return s;
}