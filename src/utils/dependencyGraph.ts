import type {SpreadsheetState} from '../hooks/useSpreadsheetReducer.ts';

type Graph = Record<string, string[]>;

export function buildGraph(state: SpreadsheetState) {
  const graph: Graph = {};
  Object.entries(state.cells).forEach(([addr, data]) => {
    graph[addr] = data.dependencies || [];
  });
  return graph;
}

export function detectCycle(graph: Graph) {
  const visited = new Set<string>();
  const stack = new Set<string>();
  const path: string[] = [];

  function dfs(node: string): boolean {
    if (stack.has(node)) {
      path.push(node);
      return true;
    }
    if (visited.has(node)) return false;
    visited.add(node);
    stack.add(node);
    for (const neigh of graph[node] || []) {
      if (dfs(neigh)) {
        path.push(node);
        return true;
      }
    }
    stack.delete(node);
    return false;
  }

  for (const node of Object.keys(graph)) {
    if (dfs(node)) return path.reverse();
  }
  return null;
}
