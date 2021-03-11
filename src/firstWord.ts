export const firstWord = (str: any) : string => {
  let result: string = str.match(/([a-z']+)/i)[0];
  return result;
}