import {greeting} from '../src/index';

describe('test fn greeting', () => {
  test('check greeting return', () => {
    const response = greeting('John Wick');
    expect(response).toEqual('Hello John Wick welcome to ts club')
  });
}) 