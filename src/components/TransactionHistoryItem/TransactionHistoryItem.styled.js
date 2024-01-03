import styled from 'styled-components';

export const StyledTransactionHistoryItem = styled.tr`
  text-align: center;
  cursor: pointer;
  transition: transform 0.5s ease-out;

  &:hover {
    transform: scale(1.05);
    border: 1px solid #cfd9e6;
    box-shadow: 0px 0px 3px 2px #cfd9e6;
  }

  td {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 12px;
    text-transform: capitalize;

    padding: ${({ theme }) => theme.spacing(5)};
    border-right: 1px solid #e5eaed;
  }

  td:last-child {
    border: none;
  }
`;
