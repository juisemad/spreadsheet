import React, {useDeferredValue} from 'react';

import styles from '../Table.styles.ts';

import {Box} from '@mui/material';

import createLetters from '../utils/createLetters.ts';

interface Props {
  cols: number;
}

const TableHeadWithLetters: React.FC<Props> = ({cols}) => {
  const deferredCols = useDeferredValue(cols);

  const letters = createLetters(deferredCols);

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
