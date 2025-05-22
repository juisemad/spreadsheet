import {EditBar} from './edit-bar/EditBar.tsx';
import TableSizeController from './table-size-controller/TableSizeController.tsx';
import Table from './table/Table.tsx';

export const Spreadsheet = () => (
  <>
    <TableSizeController />
    <EditBar />
    <Table />
  </>
);
