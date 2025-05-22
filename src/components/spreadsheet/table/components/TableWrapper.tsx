import React, {type FC} from 'react';

import styles from '../Table.styles.ts';

import {Box} from '@mui/material';

interface Props {
  children: React.ReactNode;
  cols: number;
}

const TableWrapper: FC<Props> = ({children, cols}) => {
  return (
    <Box sx={styles.outerWrapper}>
      <Box sx={styles.innerWrapper(cols)}>{children}</Box>
    </Box>
  );
};

TableWrapper.displayName = 'TableWrapper';
export default TableWrapper;
