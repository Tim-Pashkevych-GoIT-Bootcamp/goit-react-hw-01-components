import { StyledTransactionHistoryItem } from './TransactionHistoryItem.styled';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <StyledTransactionHistoryItem>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </StyledTransactionHistoryItem>
  );
};

export default TransactionHistoryItem;
