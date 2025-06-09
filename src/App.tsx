import {BrowserRouter, Route, Routes} from 'react-router-dom';

import PageSelector from './components/./page-selector/PageSelector.tsx';
import {Spreadsheet} from './components/spreadsheet/Spreadsheet.tsx';
import Wrapper from './components/wrapper/Wrapper.tsx';
import {SpreadsheetProvider} from './context/SpreadsheetContext';

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
