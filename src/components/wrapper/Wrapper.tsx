import React, {type FC} from 'react';

import {Box} from '@mui/material';

interface Props {
  children?: React.ReactNode;
}

const Wrapper: FC<Props> = ({children}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '16px',
        height: '100%',
      }}
    >
      {children}
    </Box>
  );
};

Wrapper.displayName = 'Wrapper';
export default Wrapper;
