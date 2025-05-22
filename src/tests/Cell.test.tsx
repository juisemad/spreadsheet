import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';

import {Cell} from '../components/spreadsheet/table/components/Cell.tsx';
import {SpreadsheetProvider} from '../context/SpreadsheetContext';

describe('Cell', () => {
  it('renders and edits', async () => {
    render(
      <SpreadsheetProvider>
        <Cell addr="A1" />
      </SpreadsheetProvider>,
    );
    const box = screen.getByLabelText('A1');
    await userEvent.dblClick(box);
    const input = await screen.findByRole('textbox');
    await userEvent.type(input, '5{enter}');

    const result = await screen.findByText('5');

    expect(result).toBeInTheDocument();
  });
});
