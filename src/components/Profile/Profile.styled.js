import { Children } from 'react';
import styled from 'styled-components';

export const StyledProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};

  .name {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSize.header};
    font-weight: ${({ theme }) => theme.fontWeight.header};
  }
`;

export const StyledProfileCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${({ theme }) => theme.spacing(10)};
`;

export const StyledProfileCardStatistic = styled.ul`
  display: flex;
  width: 100%;
`;

export const StyledProfileCardStatisticItem = styled.li`
  width: calc((100%) / ${({ children }) => Children.count(children)});
  padding: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.bgPrimary};

  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .quantity {
    color: black;
    font-weight: bold;
  }
`;
