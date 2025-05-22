import {useReducer} from 'react';

import {buildGraph, detectCycle} from '../utils/dependencyGraph';
import {parseFormula} from '../utils/formulaParser';

type CellAddress = string;

type RawValue = string | number;

interface CellData {
  raw: RawValue;
  display: number | '';
  error?: string;
  dependencies: CellAddress[];
}

export interface SpreadsheetState {
  cells: Record<CellAddress, CellData>;
  selected: CellAddress | null;
}

const initialState: SpreadsheetState = {
  cells: {},
  selected: null,
};

export type Action = {type: 'SET_CELL'; addr: string; raw: string} | {type: 'SELECT_CELL'; addr: string};

const updateDependencies = (addr: string, newCells: Record<CellAddress, CellData>) => {
  const dependents = Object.entries(newCells).filter(([, cell]) => cell.dependencies.includes(addr));
  dependents.forEach(([dependentAddr]) => {
    const dependentCell = newCells[dependentAddr];
    const parseRes = parseFormula(dependentCell.raw.toString(), (a) => newCells[a]?.display || '');
    newCells[dependentAddr] = {
      ...dependentCell,
      display: parseRes.result ?? dependentCell.display ?? '',
      error: parseRes.error,
      dependencies: parseRes.deps,
    };
    updateDependencies(dependentAddr, newCells);
  });
};

export const reducer = (state: SpreadsheetState, action: Action): SpreadsheetState => {
  switch (action.type) {
    case 'SET_CELL': {
      const {addr, raw} = action;
      const newCells = {...state.cells};
      const parseRes = parseFormula(raw, (a) => newCells[a]?.display || '');
      newCells[addr] = {
        raw,
        display: parseRes.result ?? state.cells[addr]?.display ?? '',
        error: parseRes.error,
        dependencies: parseRes.deps,
      };
      const graph = buildGraph({...state, cells: newCells});
      const cycle = detectCycle(graph);
      if (cycle) {
        newCells[addr].error = 'Circular ref';
      } else {
        updateDependencies(addr, newCells);
      }
      return {...state, cells: newCells};
    }
    case 'SELECT_CELL':
      return {...state, selected: action.addr};
    default:
      return state;
  }
};

export default function useSpreadsheetReducer() {
  return useReducer(reducer, initialState);
}
