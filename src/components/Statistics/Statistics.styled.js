import styled from 'styled-components';

export const StyledStatisticsTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.header};

  text-align: center;
  text-transform: uppercase;

  padding: ${({ theme }) => theme.spacing(10)};
`;

export const StyledStatisticsData = styled.ul`
  display: flex;
  width: 100%;
`;
