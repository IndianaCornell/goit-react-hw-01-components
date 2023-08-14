import { TransactionItem } from './TableBody.styled';

export const TableBody = ({ items: { items } }) => {
  const transcation = items.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id}>
        <TransactionItem>{type}</TransactionItem>
        <TransactionItem>{amount}</TransactionItem>
        <TransactionItem>{currency}</TransactionItem>
      </tr>
    );
  });
  return <tbody>{transcation}</tbody>;
};
