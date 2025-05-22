import {useMemo} from 'react';

import useSpreadsheetContext from './useSpreadsheetContext.ts';

export function useCellValue(addr: string) {
  const {state} = useSpreadsheetContext();
  const data = state.cells[addr];
  return useMemo(() => data || {raw: '', display: '', dependencies: []}, [data]);
}
