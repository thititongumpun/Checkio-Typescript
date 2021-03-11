export const sumNumbers = (str: string): number => {
  let result = str.split(/\s+/).map(Number)
                  .filter(isFinite).reduce((acc, val) => acc + val, 0);
  return result;
}
