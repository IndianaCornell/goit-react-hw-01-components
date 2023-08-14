import { TableBody } from './TableBody';
import { TableTitles } from './TableTitles';

import { Table } from './TransactionHistory.styled';

export const TransactionHistory = items => {
  return (
    <Table>
      <TableTitles />
      <TableBody items={items} />
    </Table>
  );
};
