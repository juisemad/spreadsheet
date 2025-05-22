import React, {createContext} from 'react';
import type {Dispatch} from 'react';

import useSpreadsheetReducer, {type Action, type SpreadsheetState} from '../hooks/useSpreadsheetReducer.ts';

export const SpreadsheetContext = createContext<{
  state: SpreadsheetState;
  dispatch: Dispatch<Action>;
} | null>(null);

interface Props {
  children: React.ReactNode;
}

export const SpreadsheetProvider: React.FC<Props> = ({children}) => {
  const [state, dispatch] = useSpreadsheetReducer();
  return <SpreadsheetContext.Provider value={{state, dispatch}}>{children}</SpreadsheetContext.Provider>;
};
