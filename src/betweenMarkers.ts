export const betweenMarkers = (str: string, a: string, b: string) : string => {
  return str.slice(str.indexOf(a) + 1, str.indexOf(b));
}