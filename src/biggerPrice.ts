interface Stock {
  name: string,
  price: number
}

export const biggerPrice = (limit: number, data: Stock[]): Stock[] => {
  return data.sort((x, y) => y.price - x.price).slice(0, limit);
}