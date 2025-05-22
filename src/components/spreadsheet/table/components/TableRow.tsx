import {type FC} from 'react';

import styles from '../Table.styles.ts';

import {Box} from '@mui/material';

import useSpreadsheetContext from '../../../../hooks/useSpreadsheetContext.ts';
import createLetters from '../utils/createLetters.ts';
import {Cell} from './Cell.tsx';

interface Props {
  row: number;
}

const TableRow: FC<Props> = ({row}) => {
  const {state} = useSpreadsheetContext();
  const {cols} = state;

  const letters = createLetters(cols);

  return (
    <>
      <Box sx={styles.indicators}>{row + 1}</Box>
      {letters.map((l) => (
        <Cell key={`${l}${row + 1}`} addr={`${l}${row + 1}`} />
      ))}
    </>
  );
};

TableRow.displayName = 'TableRow';
export default TableRow;
