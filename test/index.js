import index from '../src/index';

describe('Entry point', () => {
  it('should provide module', () => {
    assert.deepEqual(index, {});
  });
});
