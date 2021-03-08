export const firstWord = (str: any) : string => {
  let result = str.match(/([a-z']+)/i)[0];
  return result;
}