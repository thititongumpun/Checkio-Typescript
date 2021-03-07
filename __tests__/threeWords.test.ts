import threeWords from '../src/threeWords';

describe('test fn threeWords', () => {
  test('check threeWords return', () => {
    const response = threeWords('bla bla bla bla');
    expect(response).toBeTruthy();
  });
}) 
