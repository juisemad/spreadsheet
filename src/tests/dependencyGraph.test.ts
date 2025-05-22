import {detectCycle} from '../utils/dependencyGraph';

describe('Formula Parser', () => {
  it('detects no cycle', () => {
    const graph = {A1: ['B1'], B1: []};
    expect(detectCycle(graph)).toBeNull();
  });

  it('detects cycle', () => {
    const graph = {A1: ['B1'], B1: ['A1']};
    expect(detectCycle(graph)).not.toBeNull();
  });
});
