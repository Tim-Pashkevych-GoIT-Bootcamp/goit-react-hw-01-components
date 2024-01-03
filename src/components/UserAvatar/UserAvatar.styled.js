import styled from 'styled-components';

export const StyledUserAvatar = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;

  margin-bottom: 20px;

  border: 1px solid #cfd9e6;
  border-radius: 50%;
  box-shadow: 0px 0px 3px 2px #cfd9e6;

  img {
    width: 100%;
    height: auto;
    transform: scale(1.1);
    transition: transform 0.5s ease;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
`;
