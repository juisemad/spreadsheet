import React, {type FC} from 'react';

import styles from '../Table.styles.ts';

import {Box} from '@mui/material';

import useSpreadsheetContext from '../../../../hooks/useSpreadsheetContext.ts';

interface Props {
  children: React.ReactNode;
}

const TableWrapper: FC<Props> = ({children}) => {
  const {state} = useSpreadsheetContext();
  const {cols} = state;

  return (
    <Box sx={styles.outerWrapper}>
      <Box sx={styles.innerWrapper(cols)}>{children}</Box>
    </Box>
  );
};

TableWrapper.displayName = 'TableWrapper';
export default TableWrapper;
