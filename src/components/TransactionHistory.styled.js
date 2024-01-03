import styled from 'styled-components';

export const StyledTransactionHistory = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;

  thead {
    color: white;
    font-size: 14px;
    text-transform: uppercase;
    background-color: #02bcd5;
  }
  thead th {
    padding: ${({ theme }) => theme.spacing(5)};
    border-right: 1px solid white;
  }
  thead th:last-child {
    border: none;
  }

  tbody tr:nth-child(2n) {
    background-color: #ecf1f4;
  }
`;
