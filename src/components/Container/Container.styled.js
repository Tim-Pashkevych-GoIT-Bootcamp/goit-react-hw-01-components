const { default: styled } = require('styled-components');

export const StyledContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;

  background-color: ${({ theme }) => theme.colors.bgContainer};

  border-radius: 5px;
  border: 1px solid #cfd9e6;
  box-shadow: 0px 0px 3px 2px #cfd9e6;
`;
