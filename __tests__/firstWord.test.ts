import {firstWord} from '../src/firstWord';

describe('test fn firstWord', () => {
  test('check firstWord return', () => {
    const response = firstWord('Hello world');
    expect(response).toEqual('Hello');
  });
}) 

describe('test fn firstWord', () => {
  test('check firstWord return', () => {
    const response = firstWord(' a word ');
    expect(response).toEqual('a');
  });
}) 

describe('test fn firstWord', () => {
  test('check firstWord return', () => {
    const response = firstWord('...and so on ...');
    expect(response).toEqual('and');
  });
}) 