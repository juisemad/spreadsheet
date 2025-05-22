import styles from './PageSelector.styles.ts';

import {Box, Link} from '@mui/material';

const PageSelector = () => (
  <Box sx={styles.wrapper} component="nav">
    <Link href="/spreadsheet" underline="hover">
      Launch the Spreadsheet
    </Link>
  </Box>
);

PageSelector.displayName = 'Navbar';
export default PageSelector;
