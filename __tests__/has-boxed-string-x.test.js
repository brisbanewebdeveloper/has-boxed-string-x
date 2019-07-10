import hasBoxedString from 'src/has-boxed-string-x';

// Check failure of by-index access of string characters (IE < 9)
// and failure of `0 in boxedString` (Rhino)
const boxedString = Object('a');
const splitString = boxedString[0] !== 'a' || 0 in boxedString === false;

describe('hasBoxedString', function() {
  it('is a boolean', function() {
    expect.assertions(1);
    expect(typeof hasBoxedString).toBe('boolean');
  });

  it('should match original test', function() {
    expect.assertions(1);
    expect(hasBoxedString).toBe(splitString === false);
  });
});
