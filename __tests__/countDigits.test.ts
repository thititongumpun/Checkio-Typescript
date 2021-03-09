import {countDigits} from '../src/countDigits';

describe('test fn greeting', () => {
  test('check greeing return', () => {
    expect(countDigits('hi')).toEqual(0);
    expect(countDigits('who is 1st here')).toEqual(1);
    expect(countDigits('my numbers is 2')).toEqual(1);
    expect(countDigits('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year')).toEqual(8);
    expect(countDigits('5 plus 6 is')).toEqual(2);
    expect(countDigits('')).toEqual(0);
  });
}) 