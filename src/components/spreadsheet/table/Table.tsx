import React, {useDeferredValue} from 'react';

import TableHeadWithLetters from './components/TableHeadWithLetters.tsx';
import TableRow from './components/TableRow.tsx';
import TableWrapper from './components/TableWrapper.tsx';

interface Props {
  cols: number;
  rows: number;
}

const Table: React.FC<Props> = ({cols, rows}) => {
  const deferredRows = useDeferredValue(rows);

  return (
    <TableWrapper cols={cols}>
      <TableHeadWithLetters cols={cols} />
      {Array.from({length: deferredRows}).map((_, r) => (
        <TableRow cols={cols} row={r} key={r} />
      ))}
    </TableWrapper>
  );
};

Table.displayName = 'Table';
export default Table;
