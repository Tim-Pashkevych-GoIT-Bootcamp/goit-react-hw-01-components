import styled from 'styled-components';

export const StyledFriendList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  padding: ${({ theme }) => theme.spacing(10)};
`;
