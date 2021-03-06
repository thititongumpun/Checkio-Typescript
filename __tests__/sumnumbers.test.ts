import sumNumbers from '../src/sumnumbers';

describe('test fn sumNumbers', () => {
  test('check greeing return', () => {
    const response = sumNumbers('hi');
    expect(response).toEqual(0)
  });
}) 