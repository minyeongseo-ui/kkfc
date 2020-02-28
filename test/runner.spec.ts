import {jestPreset} from 'ts-jest';
import { Runner } from '../src/core';

describe('runner', () => {
  it('zone.js test', () => {
    const r = new Runner('hi', undefined, []);
    const n = r.init('hi');
    console.log(n);
    expect(n).toEqual('hi');
  });
});
