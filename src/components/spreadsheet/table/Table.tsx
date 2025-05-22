import useSpreadsheetContext from '../../../hooks/useSpreadsheetContext.ts';
import TableHeadWithLetters from './components/TableHeadWithLetters.tsx';
import TableRow from './components/TableRow.tsx';
import TableWrapper from './components/TableWrapper.tsx';

const Table = () => {
  const {state} = useSpreadsheetContext();
  const {rows} = state;

  return (
    <TableWrapper>
      <TableHeadWithLetters />
      {Array.from({length: rows}).map((_, r) => (
        <TableRow row={r} key={r} />
      ))}
    </TableWrapper>
  );
};

Table.displayName = 'Table';
export default Table;
