import {biggerPrice} from '../src/biggerPrice';

describe('test fn greeting', () => {
  test('check greeing return', () => {
    expect(biggerPrice(2, [
    { "name": "bread", "price": 100 },
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    { "name": "water", "price": 1 }]))
      .toEqual([
      {"name": "wine", "price": 138},
      {"name": "bread", "price": 100}
    ]);
    expect(biggerPrice(1, [
    {"name": "pen", "price": 5},
    {"name": "whiteboard", "price": 170}]))
        .toEqual([
      {"name": "whiteboard", "price": 170}
    ]);
  });
}) 