import { popularWords } from './../src/popularWords';

describe('test fn popularWords', () => {
  test('check popularWords return', () => {
    expect(popularWords(`
    When I was One
    I had just begun  
    When I was Two
    I was nearly new`, ['i', 'was', 'three', 'near']))
    .toEqual({ i: 4, was: 3, three: 0, near: 0 });
  })
});