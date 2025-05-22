import {BrowserRouter, Route, Routes} from 'react-router-dom';

import PageSelector from './components/./page-selector/PageSelector.tsx';
import {Spreadsheet} from './components/spreadsheet/Spreadsheet.tsx';
import Wrapper from './components/wrapper/Wrapper.tsx';
import {SpreadsheetProvider} from './context/SpreadsheetContext';

// P1 tasks:
// todo: add deferred value to the inputs
// todo: add memoization to the components

// P2 tasks:
// todo: change divs to tr, td, th

// Notes:
// I restricted the inputs for 'errored' cells to be closed by 'Enter' key (as was described in AC),
//  but allowed to double-click another one, as it's a common behaviour in Google Spreadsheet.
// However, I added an error indication so a user could see that the cell is not valid.
const App = () => (
  <BrowserRouter>
    <Wrapper>
      <SpreadsheetProvider>
        <Routes>
          <Route path="/spreadsheet" element={<Spreadsheet />} />
          <Route path="*" element={<PageSelector />} />
        </Routes>
      </SpreadsheetProvider>
    </Wrapper>
  </BrowserRouter>
);

export default App;
