import Container from 'components/Container/Container';
import { StyledTransactionHistory } from 'components/TransactionHistory.styled';
import TransactionHistoryItem from 'components/TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <StyledTransactionHistory>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <TransactionHistoryItem key={item.id} {...item} />
          ))}
        </tbody>
      </StyledTransactionHistory>
    </Container>
  );
};

export default TransactionHistory;
