import * as lib from '../lib/utils';
import { expect } from 'chai';

export const TEST_FILEPATH = './test/data.txt';
export const MATCH = 'Line 1';

describe('word parser', () => {
  beforeEach(() => {
    // Set up before running tests.
  });

  it('finds duplicate', () => {
    const result = lib.findMatch(TEST_FILEPATH, MATCH);
    expect(result.matchedLinesIndex.length).to.equal(2);
  });

  it('finds duplicate', () => {
    const result = lib.findMatch(TEST_FILEPATH, MATCH);
    for (const line of result.nonMatchedLines) {
      expect(line.indexOf(MATCH)).to.equal(-1);
    }
  });
});
