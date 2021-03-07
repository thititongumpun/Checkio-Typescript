import sumNumbers from '../src/sumnumbers';

describe('test fn sumNumbers', () => {
  test('check sumNumbers return', () => {
    const response = sumNumbers('hi');
    expect(response).toEqual(0);
  });
}) 

describe('test fn sumNumbers', () => {
  test('check sumNumbers return', () => {
    const response = sumNumbers('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year');
    expect(response).toEqual(3755);
  });
}) 