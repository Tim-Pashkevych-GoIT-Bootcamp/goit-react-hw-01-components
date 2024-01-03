import { Children } from 'react';
import styled from 'styled-components';

export const StyledStatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc((100%) / ${({ children }) => Children.count(children)});
  padding: ${({ theme }) => theme.spacing(5)};

  justify-content: center;
  align-items: center;

  color: white;
  background-color: ${({ theme }) => theme.colors.random()};

  .percentage {
    font-size: 20px;
  }
`;
