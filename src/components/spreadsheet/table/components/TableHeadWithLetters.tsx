import styles from '../Table.styles.ts';

import {Box} from '@mui/material';

import useSpreadsheetContext from '../../../../hooks/useSpreadsheetContext.ts';
import createLetters from '../utils/createLetters.ts';

const TableHeadWithLetters = () => {
  const {state} = useSpreadsheetContext();
  const {cols} = state;

  const letters = createLetters(cols);

  return (
    <>
      <Box />
      {letters.map((l) => (
        <Box key={l} sx={styles.indicators}>
          {l}
        </Box>
      ))}
    </>
  );
};
TableHeadWithLetters.displayName = 'TableHeadWithLetters';
export default TableHeadWithLetters;
