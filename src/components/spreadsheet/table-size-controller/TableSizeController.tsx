import React from 'react';

import {Box} from '@mui/material';

import TableSizeInput from './TableSizeInput.tsx';

interface Props {
  cols: number;
  setCols: (cols: number) => void;
  rows: number;
  setRows: (rows: number) => void;
}

const TableSizeController: React.FC<Props> = ({cols, rows, setRows, setCols}) => {
  const onChangeColumns = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < 0 || value > 99) return;
    setCols(value);
  };

  const onChangeRows = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < 0 || value > 99) return;
    setRows(value);
  };

  return (
    <Box sx={{display: 'flex', gap: '16px'}}>
      <TableSizeInput label="Set columns amount (0-99)" value={cols} onChange={onChangeColumns} />
      <TableSizeInput label="Set rows amount (0-99)" value={rows} onChange={onChangeRows} />
    </Box>
  );
};

TableSizeController.displayName = 'TableSizeController';
export default TableSizeController;
