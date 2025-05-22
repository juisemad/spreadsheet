import React, {type ChangeEvent} from 'react';

import {TextField} from '@mui/material';

import useSpreadsheetContext from '../../../hooks/useSpreadsheetContext.ts';

export const EditBar: React.FC = () => {
  const {state, dispatch} = useSpreadsheetContext();
  const addr = state.selected;
  const data = addr ? state.cells[addr] : null;

  const label = addr ? `${addr}` : 'Select a cell to edit';

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    addr && dispatch({type: 'SET_CELL', addr, raw: e.target.value});
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      dispatch({type: 'SELECT_CELL', addr: ''});
      const target = e.target as HTMLInputElement;
      target.blur();
    }
  };

  return (
    <TextField
      onKeyDown={onKeyDown}
      fullWidth
      label={label}
      value={data?.raw || ''}
      onChange={onChange}
      size="small"
      helperText={data?.error || 'Enter numbers or formulas'}
      error={Boolean(data?.error)}
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
      disabled={!addr}
    />
  );
};
