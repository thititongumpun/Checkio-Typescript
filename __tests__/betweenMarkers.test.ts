import {betweenMarkers} from '../src/betweenMarkers';

describe('test fn betweenMarkers', () => {
  test('check betweenMarkers return', () => {
    expect(betweenMarkers('What is >apple<', '>', '<')).toEqual('apple');
    expect(betweenMarkers('No[/b] hi', '[b]', '[/b]')).toEqual('No');
  });
}) 