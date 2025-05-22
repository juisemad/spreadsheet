import {useState} from 'react';

import {EditBar} from './edit-bar/EditBar.tsx';
import TableSizeController from './table-size-controller/TableSizeController.tsx';
import Table from './table/Table.tsx';

export const Spreadsheet = () => {
  const [cols, setCols] = useState(10);
  const [rows, setRows] = useState(10);

  return (
    <>
      <TableSizeController cols={cols} setCols={setCols} rows={rows} setRows={setRows} />
      <EditBar />
      <Table cols={cols} rows={rows} />
    </>
  );
};
