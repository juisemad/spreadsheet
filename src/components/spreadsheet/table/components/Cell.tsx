import React from 'react';

import styles from '../Table.styles.ts';

import {Box, TextField, Typography} from '@mui/material';

import {useCellValue} from '../../../../hooks/useCellValue.ts';
import useSpreadsheetContext from '../../../../hooks/useSpreadsheetContext.ts';

interface Props {
  addr: string;
}
export const Cell: React.FC<Props> = React.memo(({addr}) => {
  const {state, dispatch} = useSpreadsheetContext();
  const data = useCellValue(addr);

  const isEdit = state.selected === addr;

  const onDoubleClick = () => {
    dispatch({type: 'SELECT_CELL', addr});
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => dispatch({type: 'SET_CELL', addr, raw: e.target.value});
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      !data.error && dispatch({type: 'SELECT_CELL', addr: ''});
    }
  };

  return (
    <Box sx={styles.cell(Boolean(data?.error && !isEdit))} onDoubleClick={onDoubleClick} aria-label={addr}>
      {isEdit ? (
        <TextField
          aria-label={`${addr}-input`}
          fullWidth
          value={data.raw.toString()}
          onChange={onChange}
          onKeyDown={onKeyDown}
          error={Boolean(data.error)}
          size="small"
          autoFocus
          sx={styles.cellInput}
        />
      ) : (
        <Typography sx={styles.cellTypography}>{data.display}</Typography>
      )}
    </Box>
  );
});
