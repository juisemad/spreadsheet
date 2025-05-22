import {parseFormula} from '../utils/formulaParser';

describe('Process formula', () => {
  it('parses numbers and refs', () => {
    const get = (a: string) => (a === 'A1' ? 5 : 0);
    expect(parseFormula('42', get).result).toBe(42);
    expect(parseFormula('=A1', get).result).toBe(6);
  });
});
