export const nonUniqueElements = (data: number[]): number[] => {
  return data.filter(el => data.indexOf(el) !== data.lastIndexOf(el));
}
