import {useContext} from 'react';

import {SpreadsheetContext} from '../context/SpreadsheetContext';

export default function useSpreadsheetContext() {
  const ctx = useContext(SpreadsheetContext);
  if (!ctx) throw new Error('Missing SpreadsheetProvider');
  return ctx;
}
