import {backwardStringByWord} from '../src/backwardStringByWord';

describe('test fn backwardStringByWord', () => {
  test('check backwardStringByWord return', () => {
    expect(backwardStringByWord('')).toEqual('');
    expect(backwardStringByWord('world')).toEqual('dlrow');
    expect(backwardStringByWord('hello world')).toEqual('olleh dlrow');
    expect(backwardStringByWord('hello   world')).toEqual('olleh   dlrow');
    expect(backwardStringByWord('welcome to a game')).toEqual('emoclew ot a emag');
  });
}) 