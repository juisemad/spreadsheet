import {act, renderHook} from '@testing-library/react';

import useSpreadsheetReducer, {type Action, type SpreadsheetState, reducer} from '../hooks/useSpreadsheetReducer';

describe('useSpreadsheetReducer', () => {
  let initialState: SpreadsheetState;

  beforeEach(() => {
    initialState = {
      cells: {},
      selected: null,
      rows: 10,
      cols: 10,
    };
  });

  it('handles SET_CELL action', () => {
    const state = {...initialState};
    const action: Action = {type: 'SET_CELL', addr: 'A1', raw: '10'};

    const newState = reducer(state, action);
    expect(newState.cells['A1']).toEqual({
      raw: '10',
      display: 10,
      error: undefined,
      dependencies: [],
    });
  });

  it('detects circular references', () => {
    const state = {
      ...initialState,
      cells: {
        A1: {raw: '=B1', display: '', dependencies: ['B1'], error: undefined},
        B1: {raw: '=A1', display: '', dependencies: ['A1'], error: undefined},
      },
    } satisfies SpreadsheetState;

    const action: Action = {type: 'SET_CELL', addr: 'A1', raw: '=B1'};

    const newState = reducer(state, action);
    expect(newState.cells['A1'].error).toBe('Circular ref');
  });

  it('handles SELECT_CELL action', () => {
    const state = {...initialState};
    const action: Action = {type: 'SELECT_CELL', addr: 'B2'};

    const newState = reducer(state, action);
    expect(newState.selected).toBe('B2');
  });

  it('handles SET_ROWS action', () => {
    const state = {
      ...initialState,
      cells: {
        A1: {raw: '5', display: 5, dependencies: [], error: undefined},
        A11: {raw: '15', display: 15, dependencies: [], error: undefined},
      },
    };
    const action: Action = {type: 'SET_ROWS', rows: 5};

    const newState = reducer(state, action);
    expect(newState.rows).toBe(5);

    expect(newState.cells).not.toHaveProperty('A11');
  });

  it('handles SET_COLUMNS action', () => {
    const state = {
      ...initialState,
      cells: {
        A1: {raw: '10', display: 10, dependencies: [], error: undefined},
        Z1: {raw: '15', display: 15, dependencies: [], error: undefined},
      },
    };
    const action: Action = {type: 'SET_COLUMNS', cols: 3};

    const newState = reducer(state, action);
    expect(newState.cols).toBe(3);
    expect(newState.cells).not.toHaveProperty('Z1');
    expect(newState.cells).toHaveProperty('A1');
  });

  it('integrates with useSpreadsheetReducer hook', () => {
    const {result} = renderHook(() => useSpreadsheetReducer());

    act(() => {
      result.current[1]({type: 'SET_CELL', addr: 'A1', raw: '42'});
    });

    expect(result.current[0].cells['A1']).toEqual({
      raw: '42',
      display: 42,
      error: undefined,
      dependencies: [],
    });
  });
});
