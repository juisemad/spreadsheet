import React, {useDeferredValue} from 'react';

import {Box} from '@mui/material';

import useSpreadsheetContext from '../../../hooks/useSpreadsheetContext.ts';
import TableSizeInput from './TableSizeInput.tsx';

const TableSizeController = () => {
  const {state, dispatch} = useSpreadsheetContext();
  const deferredCols = useDeferredValue(state.cols);
  const deferredRows = useDeferredValue(state.rows);

  const onChangeColumns = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < 0 || value > 99) return;
    dispatch({type: 'SET_COLUMNS', cols: value});
  };

  const onChangeRows = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < 0 || value > 99) return;
    dispatch({type: 'SET_ROWS', rows: value});
  };

  return (
    <Box sx={{display: 'flex', gap: '16px'}}>
      <TableSizeInput label="Set columns amount (0-99)" value={deferredCols} onChange={onChangeColumns}/>
      <TableSizeInput label="Set rows amount (0-99)" value={deferredRows} onChange={onChangeRows}/>
    </Box>
  );
};

TableSizeController.displayName = 'TableSizeController';
export default TableSizeController;
