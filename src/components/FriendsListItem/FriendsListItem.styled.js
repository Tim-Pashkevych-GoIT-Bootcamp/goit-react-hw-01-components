import styled from 'styled-components';

export const StyledFriendsListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;

  border-radius: 5px;
  border: 1px solid #cfd9e6;
  box-shadow: 0px 0px 3px 2px #cfd9e6;

  width: 300px;
  padding: 10px;

  cursor: pointer;
  transition: transform 0.5s ease-out;

  &:hover {
    transform: scale(1.05);
  }

  .status::after {
    content: '';
    display: block;

    width: 20px;
    height: 20px;
    background-color: ${({ $isOnline }) => ($isOnline ? 'green' : 'red')};
    border-radius: 50%;
  }

  .name {
    font-size: 20px;
    font-weight: 500;
  }
`;
